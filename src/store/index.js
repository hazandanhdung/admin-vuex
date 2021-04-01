import Vue from "vue";
import Vuex from "vuex";
import User from "./user";
import Common from "./common";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    User,
    Common,
  },
});

export default store;
