import { createWebHistory, createRouter } from "vue-router";
import Home from "./pages/Home.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: Home, alias: "/home" },
  ],
});

export default router;
