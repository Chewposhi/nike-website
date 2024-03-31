import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router/router";

import { MotionPlugin } from '@vueuse/motion'
import VueSmoothScroll from "v-smooth-scroll";
createApp(App).use(router).use(MotionPlugin).use(VueSmoothScroll, {
    duration: 2000,
}).mount("#app");
