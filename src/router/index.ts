import { createRouter, createWebHistory } from "vue-router";
import { RouteNames } from "./names";
import type { CustomRoute } from "./typings";

const routes: CustomRoute[] = [
  {
    path: "/",
    component: () => import("@/layouts/app-layout/app-layout.vue"),
    redirect: RouteNames.HOME,
    children: [
      {
        path: "",
        component: () => import("@/views/home/home-view.vue"),
        name: RouteNames.HOME,
      },
      {
        path: "products",
        component: () => import("@/views/products/products-view.vue"),
        name: RouteNames.PRODUCTS,
      },
      {
        path: "contacts",
        component: () => import("@/views/contacts/contacts-view.vue"),
        name: RouteNames.CONTACTS,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
