import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, type Plugin, type PreviewServer, type ViteDevServer } from "vite";

// Mirrors the /download redirect from vercel.json so the button works in dev/preview too.
function downloadRedirect(): Plugin {
  const handler = (server: ViteDevServer | PreviewServer) => {
    server.middlewares.use("/download", (_req, res) => {
      res.statusCode = 307;
      res.setHeader("Location", "/downloads/Fiple-1.1.0-mac.zip?v=95ad2d28");
      res.end();
    });
  };
  return { name: "download-redirect", configureServer: handler, configurePreviewServer: handler };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), downloadRedirect()],
});
