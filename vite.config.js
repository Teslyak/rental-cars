import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/rental-cars/",
  plugins: [react()],
  extensions: [".jsx", ".json", ".css", ".js"],
});
