import type { RouteRecordRaw } from "vue-router";
import type { RouteNames } from "../names";

export type CustomRouteMeta = {
  redirectTo?: RouteNames;
};

export type CustomRoute = RouteRecordRaw & {
  meta?: CustomRouteMeta;
};
