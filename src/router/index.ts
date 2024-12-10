import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home/Home.vue";
import FarmingView from "@/views/FarmingView.vue";
import ImageDetail from "@/views/ImageDetail/ImageDetail.vue";
import Gallery from "@/views/Gallery/Gallery.vue";

// Add routes for design, build, and concept pages

import Details from "@/views/Details.vue";
import ProjectDetail from "@/views/ProjectDetail.vue";
import PrivacyPolicy from "@/components/PrivacyPolicy.vue";
import TermsAndConditions from "@/components/TermsAndConditions.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  { path: '/details/:title', component: Details, props: true },
  {
    path: "/gallery",
    name: "Gallery",
    component: Gallery,
  },
  {
    path: '/project/:projectSlug', // Use the slug as the parameter
    name: 'ProjectDetail',
    component: ProjectDetail,
  },
  {
    path: "/image/:index",
    name: "ImageDetail",
    component: ImageDetail,
    props: true,
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
    path: '/privacy-policy',
    name: 'PrivacyPolicy',
    component: PrivacyPolicy
  },
  {
    path: '/terms-and-conditions',
    name: 'TermsAndConditions',
    component: TermsAndConditions
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
      import(/* webpackChunkName: "contact-page" */ "../views/ContactPage/ContactPage.vue"),
  },

  // Add new routes for Design, Build, and Concept
  {
    path: "/design",
    name: "Design",
    component: () => import(/* webpackChunkName: "design" */ "@/views/Design/Design.vue"),
  },
  {
    path: "/build",
    name: "Build",
    component: () => import(/* webpackChunkName: "build" */ "@/views/Build/Build.vue"),
  },
  {
    path: "/concept",
    name: "Concept",
    component: () => import(/* webpackChunkName: "concept" */ "@/views/Concept/Cocept.vue"),
  },
  {
    path: "/:catchAll(.*)", // Catch-all route for undefined paths
    redirect: "/", // Redirect to home for undefined routes
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 }; // Always scroll to top
  },
});

// Scroll to the top when navigating to a new route
router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  next();
});

export default router;
