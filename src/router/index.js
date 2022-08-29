// core
import { createRouter, createWebHistory } from "vue-router";

// views
import Home from "../views/Home/index.vue";
import List from "../views/List/index.vue";
import Movie from "../views/Movie/index.vue";
import Form from "../views/Form/index.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/search",
    name: "search",
    component: List,
  },
  {
    path: "/movie/:id",
    name: "movie",
    component: Movie,
    params: true,
  },
  {
    path: "/form",
    name: "form",
    component: Form,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
