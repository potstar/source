import Vue from "vue";
import Vuex from "vuex";
import layout from './modules/layout';
import user from './modules/user';
import tagView from './modules/tagView';
import asyncRoutes from './modules/asyncRoutes';
import createPersistedState from 'vuex-persistedstate';
import getters from './getters';

Vue.use(Vuex);

// export default new Vuex.Store({
//   state: {},
//   mutations: {},
//   actions: {}
// });
const store=new Vuex.Store({
  modules:{
    layout,
    user,
    tagView,
    asyncRoutes,
  },
  getters,
  // plugins:[createPersistedState()]
  plugins: [createPersistedState({ paths: ['user', 'tagsView'] })],
});
export default store;