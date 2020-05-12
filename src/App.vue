<template>
  <div>
    <Navbar />
    <div v-if="isTime">
      <div class="modal fade" id="addon_modal" tabindex="-1" role="dialog">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title text-center">Modal title</h4>
            </div>
            <div class="modal-body">
              <p>List of add-ons here</p>
            </div>
            <div class="modal-footer">//buttons to add add-ons to cart and to dismiss modal here</div>
          </div>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import { mapState } from "vuex";

export default {
  name: "App",
  components: {
    Navbar
  },
  computed: {
    ...mapState(["now"]),
    isTime: function() {
      if (this.now > "09:00:00") {
        // audio.play();
        console.log("Alarm!");
        return true;
      } else {
        return false;
      }
    }
  }
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
