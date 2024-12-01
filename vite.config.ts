import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    // minify: "terser", // Menggunakan terser untuk minifikasi JavaScript
    // terserOptions: {
    //   compress: {
    //     drop_console: true, // Menghapus console.log di produksi
    //   },
    // },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});

// npm install terser --save-dev
