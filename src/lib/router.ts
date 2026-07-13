import { useEffect, useState } from "react";

export type Route = "home" | "privacy" | "terms" | "support" | "download";

const pathMap: Record<string, Route> = {
  "/privacy": "privacy",
  "/terms": "terms",
  "/support": "support",
  "/download": "download",
};

const ROUTE_EVENT = "fiple:routechange";

function parse(): Route {
  return pathMap[window.location.pathname] ?? "home";
}

/**
 * Client-side navigation. `to` may be a clean path ("/privacy"), a path with an
 * anchor ("/#how"), or a bare anchor ("#how"). Uses the History API so URLs stay
 * clean (no "#/") and refreshes/links resolve to the same page.
 */
export function navigate(to: string) {
  const target = new URL(to, window.location.origin);
  const next = target.pathname + target.hash;
  const current = window.location.pathname + window.location.hash;

  if (next === current) {
    if (target.hash) document.getElementById(target.hash.slice(1))?.scrollIntoView();
    return;
  }

  window.history.pushState({}, "", next);
  window.dispatchEvent(new Event(ROUTE_EVENT));
}

function isModifiedClick(e: MouseEvent) {
  return e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey;
}

export function useRoute(): Route {
  const [route, setRoute] = useState<Route>(parse);

  useEffect(() => {
    const sync = () => setRoute(parse());
    window.addEventListener("popstate", sync);
    window.addEventListener(ROUTE_EVENT, sync);

    // Intercept internal link clicks so page paths and in-page #anchors route on
    // the client — no full reload, clean URLs.
    function onClick(e: MouseEvent) {
      if (e.defaultPrevented || isModifiedClick(e)) return;
      const anchor = (e.target as HTMLElement | null)?.closest("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || anchor.hasAttribute("download")) return;
      if (anchor.target && anchor.target !== "_self") return;
      // Leave external links and other protocols (mailto:, https:, tel:) alone.
      if (/^[a-z][a-z0-9+.-]*:/i.test(href)) return;

      if (href.startsWith("/")) {
        e.preventDefault();
        navigate(href);
      } else if (href.startsWith("#") && window.location.pathname !== "/") {
        // In-page anchor clicked from a legal page → go home, then scroll there.
        e.preventDefault();
        navigate("/" + href);
      }
      // In-page #anchors while already on home: let the browser scroll natively.
    }

    document.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("popstate", sync);
      window.removeEventListener(ROUTE_EVENT, sync);
      document.removeEventListener("click", onClick);
    };
  }, []);

  return route;
}
