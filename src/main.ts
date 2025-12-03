import "./assets/styles/index.scss";

import { createApp } from "vue";

import FloatingVue from "floating-vue";
import { autoAnimatePlugin } from "@formkit/auto-animate/vue";

import App from "./App.vue";
import router from "./router";
import i18n from "./common/plugins/i18n";
import Copy from "vue3-copy";

const app = createApp(App);

app.use(router);
app.use(i18n);
app.use(Copy);

app.use(FloatingVue, {
  themes: {
    notifications: {
      $extend: "dropdown",
    },
  },
});

app.use(autoAnimatePlugin);

app.mount("#app");
