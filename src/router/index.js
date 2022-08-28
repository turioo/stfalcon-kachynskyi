import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home/index.vue";
import Search from "../views/Search/index.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/search",
    name: "search",
    component: Search,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
