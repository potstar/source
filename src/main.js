import Vue from "vue";
import axios from "./plugins/axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './plugins/element.js';
import '@/icons/autoImportSvg.js';
// import './mock/index.js';
import './permission'

Vue.prototype.axios=axios;
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
