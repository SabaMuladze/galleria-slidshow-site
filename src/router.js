import { createWebHistory, createRouter } from "vue-router";
import Home from "./pages/Home.vue";
import Details from "./components/Details.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: Home, alias: "/home" },
    {
      path: "/details/:id",
      component: Details,
      props: true,
      name: "Details",
    },
  ],
});

export default router;
