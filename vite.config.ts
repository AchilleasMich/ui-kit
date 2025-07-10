import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import dts from "vite-plugin-dts";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    tsconfigPaths(),
    cssInjectedByJsPlugin(),
    dts({
      insertTypesEntry: true,
      outDir: "dist",
      rollupTypes: true,
      exclude: ["vite.config.ts", "tailwind.config.ts", "vitest.workspace.ts"],
    }),
  ],
  build: {
    lib: {
      entry: "src/index.ts",
      name: "ui-kit",
      // formats: ["es"],
      fileName: "ui-kit",
    },
    rollupOptions: {
      external: ["react"],
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/setup.ts",
  },
});
