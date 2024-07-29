import { state } from "./state";
import { mutations } from "./mutation";
import { actions } from "./action";
import { getters } from "./getter";
import { createStore } from "vuex";

const store = new createStore({
  state,
  mutations,
  actions,
  getters,
});

export default store;