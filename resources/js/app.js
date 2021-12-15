import "./bootstrap";
import Vue from "vue";
import Board from "./pages/Board.vue";
import ApolloClient from "apollo-boost";
import VueApollo from "vue-apollo";

window.Vue = Vue;

Vue.use(VueApollo);
Vue.component("board", Board);

const apolloClient = new ApolloClient({
    uri: "http://127.0.0.1:8000/graphql",
});

const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
});

const app = new Vue({
    el: "#app",
    apolloProvider,
});
