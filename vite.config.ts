import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [svgr(), react()],
});
interface ImportMetaEnv {
  readonly VITE_API_URL1: string;
  readonly VITE_GRAPHQL_ENDPOINT?: string;
  // add any other variables starting with VITE_ here
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}