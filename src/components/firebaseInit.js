import firebase from "firebase/app";
import "firebase/firestore";
import firebaseConfig from "./firebaseConfig";
import store from "../store";

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged((user) => {
  store.dispatch("fetchUser", user);
});

export default firebaseApp.firestore();
