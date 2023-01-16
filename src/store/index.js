import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: [],
    addedItems: [],
  },
  getters: {
    getItems: (state) => state.items,
  },
  mutations: {
    SET_ITEMS(state, items) {
      state.items = items;
    },
    ADD_ITEM(state, item) {
      state.addedItems.push(item);
    },
    UPDATE_ITEM(state, item) {
      let index = state.addedItems.findIndex((addedItem) => addedItem.symbol === item.symbol);
      state.addedItems[index] = item;
      state.addedItems = [...state.addedItems];
    },
    REMOVE_ITEM(state, item) {
      let index = state.addedItems.findIndex((addedItem) => addedItem.symbol === item.symbol);
      state.addedItems = state.addedItems.filter((item, i) => i !== index);
    },
  },
  actions: {
    addItem({ commit }, values) {
      console.log(values);
      commit("ADD_ITEM", values);
    },
    updateItem({ commit }, values) {
      commit("UPDATE_ITEM", values);
    },
    removeItem({ commit }, values) {
      commit("REMOVE_ITEM", values);
    },
    async fetchItems({ commit }) {
      await axios.get("https://api2.binance.com/api/v3/ticker/24hr").then((res) => {
        commit("SET_ITEMS", res.data);
      });
    },
  },
  modules: {},
});
