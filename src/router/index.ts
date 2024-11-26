// src/router.js
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home/Home.vue";
import FarmingView from "@/views/FarmingView.vue";


const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about-dlc",
    name: "About-Dlc",
    component: () =>
      import(/* webpackChunkName: "about-dlc" */ "../views/AboutDlc/AboutDlc.vue"),
  },
  {
    path: "/farming",
    name: "Farming",
    component: FarmingView,
  },

  {
    path: "/gallery",
    name: "Gallery",
    component: () =>
      import(/* webpackChunkName: "gallery" */ "../views/Gallery/Gallery.vue"),
  },
  {
    path: "/our-worlds",
    name: "Our-Worlds",
    component: () =>
      import(/* webpackChunkName: "our-worlds" */ "../views/OurWorlds/OurWorlds.vue"),
  },
  {
    path: "/experiences",
    name: "Experiences",
    component: () =>
      import(/* webpackChunkName: "experiences" */ "../views/Experiences/Experiences.vue"),
  },
  {
    path: "/press",
    name: "Press",
    component: () =>
      import(/* webpackChunkName: "press" */ "../views/Press/Press.vue"),
  },
  {
    path: "/ContactPage",
    name: "ContactPage",
    component: () =>
      import(/* webpackChunkName: "press" */ "../views/ContactPage/ContactPage.vue"),
  },
  {
    path: "/:catchAll(.*)", // Catch-all route for undefined paths
    redirect: "/", // Redirect to home for undefined routes
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// Scroll to the top when navigating to a new route
router.beforeEach((to, from, next) => {
  // Ensure the scroll position is at the top
  window.scrollTo(0, 0);
  next();
});

export default router;
