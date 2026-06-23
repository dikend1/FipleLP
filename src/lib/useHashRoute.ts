import { useEffect, useState } from "react";

export type Route = "home" | "privacy" | "terms" | "support";

const routeMap: Record<string, Route> = {
  "#/privacy": "privacy",
  "#/terms": "terms",
  "#/support": "support",
};

function parse(): Route {
  return routeMap[window.location.hash] ?? "home";
}

export function useHashRoute(): Route {
  const [route, setRoute] = useState<Route>(parse);

  useEffect(() => {
    const onChange = () => setRoute(parse());
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);

  return route;
}
