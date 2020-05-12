import Vue from "vue";
import Router from "vue-router";
import Login from "../components/Login";
import Register from "../components/Register";
import Schedule from "../components/Schedule";
import Dashboard from "../components/Dashboard";
import Collection from "../components/Collection";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    { path: "/login", name: "Login", component: Login },
    { path: "/register", name: "Register", component: Register },
    { path: "/schedule", name: "Schedule", component: Schedule },
    { path: "/dashboard", name: "Dashboard", component: Dashboard },
    { path: "/collection", name: "Collection", component: Collection },
  ],
});

export default router;
