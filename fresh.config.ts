import { defineConfig } from "$fresh/server.ts";
import tailwindcss from "@pakornv/fresh-plugin-tailwindcss";

export default defineConfig({
  plugins: [tailwindcss()],
});
