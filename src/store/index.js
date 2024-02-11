import { createStore } from "vuex";

import cars from "./modules/cars";

import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

const store = createStore({
  state: {
    isModal: false,
  },
  actions,
  mutations,
  getters,
  modules: {
    cars,
  },
});

export default store;
