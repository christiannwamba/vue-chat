import Vue from "vue";
import VSocket from "vue-socket.io";
import { ChatInstaller } from "@progress/kendo-chat-vue-wrapper";
import "@progress/kendo-ui";
import "@progress/kendo-theme-default/dist/all.css";

import App from "./App.vue";

Vue.use(ChatInstaller);
Vue.use(
  new VSocket({
    debug: true,
    connection: "http://localhost:4000"
  })
);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
