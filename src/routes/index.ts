import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  // ArrayNotation RouteRecordRaw[] dan GenericNotation Array<RouteRecordRaw>
  {
    path: "/",
    component: () => import("@/views/Home.vue"),
    name: "home",
    meta: { title: "Home Page" },
  },
  {
    path: "/about",
    component: () => import("@/views/About.vue"),
    name: "about",
    meta: { title: "About Page" },
  },
  {
    path: "/movies",
    component: () => import("@/views/Movies.vue"),
    name: "movies",
    meta: { title: "Movies Page" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, _from, next) => {
  const title = to.meta.title || "Default Title";
  document.title = title as string;
  next();
});

export default router;
