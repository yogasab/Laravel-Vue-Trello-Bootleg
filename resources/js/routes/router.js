import Vue from "vue";
import VueRouter from "vue-router";
import Board from "../pages/Board.vue";
import Login from "../pages/auth/Login.vue";
import Register from "../pages/auth/Register.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "board",
        component: Board,
    },
    {
        path: "/login",
        name: "login",
        component: Login,
    },
    {
        path: "/register",
        name: "register",
        component: Register,
    },
];

export default new VueRouter({
    mode: "history",
    routes,
});
