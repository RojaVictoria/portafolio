import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import { projectsModule } from "./modules/projects";

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    projects: projectsModule,
  },
});