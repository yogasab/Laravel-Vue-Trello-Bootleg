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
    actions: {},
};

export default new Vuex.Store(store);
