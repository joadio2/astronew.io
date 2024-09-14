import { defineConfig } from "astro/config";
import icon from "astro-icon";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    icon({
      collections: {
        mdi: import("@iconify-json/mdi/icons.json", {
          assert: { type: "json" },
        }), // Usar la afirmación de tipo JSON
      },
    }),
  ],
});
