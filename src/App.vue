<template>
  <div>
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import { mapState } from "vuex";
import swal from "sweetalert";

export default {
  name: "App",
  components: {
    Navbar,
  },
  computed: {
    ...mapState(["now", "user"]),
  },
  watch: {
    now() {
      if (this.user.loggedIn) {
        switch (this.now) {
          case "08:50":
            swal("Get ready for 🌞Morning Stand-up");
            break;
          case "09:10":
            swal("Get ready for 👾Block 1");
            break;
          case "10:40":
            swal("It's your ☕️Morning Break soon!");
            break;
          case "10:55":
            swal("Get ready for 👾Block 2");
            break;
          case "12:25":
            swal("It's almost 🍔Lunch Break!");
            break;
          case "13:25":
            swal("Get ready for 🎤After Lunch Stand-up");
            break;
          case "13:40":
            swal("Get ready for 👾Block 3");
            break;
          case "15:10":
            swal("It's your ☕️Afternoon Break soon!");
            break;
          case "15:25":
            swal("Get ready for 👾Block 4");
            break;
          case "16:55":
            swal("Get ready for 👾Block 5");
            break;
          case "17:45":
            swal("It's 🥳Closing Party in 5 mins!");
            break;
          default:
            console.log("No reminders");
        }
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
