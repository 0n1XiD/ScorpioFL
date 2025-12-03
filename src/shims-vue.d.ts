import { RouterLink, RouterView } from "vue-router";

declare global {
  interface Window {
    onRecieveToken: () => void;
    EchoServiceClient: unknown;
  }
  interface __VLS_GlobalComponents {
    RouterLink: typeof RouterLink;
    "router-view": typeof RouterView;
  }
}
