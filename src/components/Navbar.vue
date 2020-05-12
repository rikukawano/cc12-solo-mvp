<template>
  <nav class="navbar navbar-expand-md navbar-light navbar-laravel">
    <div class="container">
      <router-link to="/" class="navbar-brand">{{ now }}</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto"></ul>
        <ul class="navbar-nav ml-auto">
          <template v-if="user.loggedIn">
            <div class="nav-item">{{ user.data.displayName }}</div>
            <li class="nav-item">
              <router-link
                to="dashboard"
                class="nav-link"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
              >🥚Dashboard</router-link>
            </li>
            <li class="nav-item">
              <router-link
                to="collection"
                class="nav-link"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
              >🐱Collection</router-link>
            </li>
            <li class="nav-item">
              <router-link
                to="schedule"
                class="nav-link"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
              >🚀Schedule</router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" @click.prevent="signOut">👋Sign out</a>
            </li>
          </template>
          <template v-else>
            <li class="nav-item">
              <router-link
                to="login"
                class="nav-link"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
              >Login</router-link>
            </li>
            <li class="nav-item">
              <router-link
                to="register"
                class="nav-link"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
              >Register</router-link>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import firebase from "firebase";
import store from "../store";

export default {
  created() {
    store.dispatch("start");
  },
  computed: {
    ...mapGetters({
      // map `this.user` to `this.$store.getters.user`
      user: "user"
    }),
    ...mapState(["now"])
  },
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({
            name: "home"
          });
        });
    }
  }
};
</script>
