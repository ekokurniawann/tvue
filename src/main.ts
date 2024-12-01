import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";
import router from "./routes";

createApp(App).use(router).mount("#app");

// npm install --save-dev typescript @vue/compiler-sfc
// npm install --save-dev @types/node
