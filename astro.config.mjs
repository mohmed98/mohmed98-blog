import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

import mdx from "@astrojs/mdx";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
    site: "https://moatta.com/",
    base: "/",
    integrations: [sitemap(), mdx(), react()],
    markdown: {
        shikiConfig: {
            theme: "material-theme-darker",
            langs: [],
        },
    },
});