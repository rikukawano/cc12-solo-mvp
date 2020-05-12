import Vue from "vue";
import Vuex from "vuex";
import db from "./components/firebaseInit";
import firebase from "firebase/app";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      loggedIn: false,
      data: null,
      collection: null,
    },
    now: new Date().toLocaleTimeString("en-GB"),
  },
  getters: {
    user(state) {
      return state.user;
    },
  },
  mutations: {
    SET_LOGGED_IN(state, value) {
      state.user.loggedIn = value;
    },
    SET_USER(state, data) {
      state.user.data = data;
    },
    FETCH_COLLECTION(state, uid) {
      db.collection("users")
        .doc(uid)
        .get()
        .then((doc) => {
          if (doc) {
            state.user.collection = doc.data().collection;
          } else {
            console.log("Document does not exist!");
          }
        });
    },
    UPDATE_COLLECTION(state, catId) {
      db.collection("users")
        .doc(state.user.data.uid)
        .update({
          collection: firebase.firestore.FieldValue.arrayUnion(catId),
        });
    },
    UPDATE_TIME(state) {
      state.now = new Date().toLocaleTimeString("en-GB");
    },
  },
  actions: {
    fetchUser({ commit }, user) {
      commit("SET_LOGGED_IN", user !== null);
      if (user) {
        commit("SET_USER", {
          displayName: user.displayName,
          email: user.email,
          uid: user.uid,
        });
        commit("FETCH_COLLECTION", user.uid);
      } else {
        commit("SET_USER", null);
      }
    },
    start({ commit }) {
      setInterval(() => {
        commit("UPDATE_TIME");
      }, 1000);
    },
    addCat({ commit }, catId) {
      commit("UPDATE_COLLECTION", catId);
    },
  },
});
