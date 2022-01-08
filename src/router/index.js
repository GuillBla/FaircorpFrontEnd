import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/MainMenu.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/buildings",
    name: "Buildings",
    component: () =>
      import(/* webpackChunkName: "buildings" */ "../views/Buildings.vue"),
  },
  {
    path: "/rooms",
    name: "Rooms",
    component: () => import("../views/Rooms.vue"),
  },
  {
    path: "/windows",
    name: "Windows",
    component: () => import("../views/Windows.vue"),
  },
  {
    path: "/heaters",
    name: "Heaters",
    component: () => import("../views/Heaters.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
