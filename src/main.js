import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

// px 转 vw 
// 1.npm 下载 postcss-px-to-viewport
// 2.vue.config.js 或 postcss.config.js 配置 postcss-px-to-viewport
// 3.项目正常使用px项目解析后自动转相应的vw

createApp(App).use(store).use(router).mount("#app");
