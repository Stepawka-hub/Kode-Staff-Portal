import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@images": path.resolve(__dirname, "src/assets/images"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@icons": path.resolve(__dirname, "src/components/icons"),
      "@providers": path.resolve(__dirname, "src/providers"),
      "@components": path.resolve(__dirname, "src/components"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@selectors": path.resolve(__dirname, "src/services/selectors"),
      "@slices": path.resolve(__dirname, "src/services/slices"),
      "@thunks": path.resolve(__dirname, "src/services/thunks"),
      "@api": path.resolve(__dirname, "src/utils/api/api.ts"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@store": path.resolve(__dirname, "src/services/store/store.ts"),
      "@services": path.resolve(__dirname, "src/services"),
      "@routes": path.resolve(__dirname, "src/routes/routes.tsx"),
      "@types": path.resolve(__dirname, "src/types/types.ts"),
    },
  },
  plugins: [react()],
});
