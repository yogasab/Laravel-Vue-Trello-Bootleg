import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = {
    state: {
        isLoggedIn: false,
    },
    mutations: {
        setLoggedIn(state, action) {
            state.isLoggedIn = Boolean(action);
        },
    },
    actions: {
        setLoggedIn({ commit }, payload) {
            const isLoggedIn = Boolean(payload);
            localStorage.setItem("isLoggedIn", isLoggedIn);
            commit("setLoggedIn", isLoggedIn);
        },
    },
};

export default new Vuex.Store(store);
