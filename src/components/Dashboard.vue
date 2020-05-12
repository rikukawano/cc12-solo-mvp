<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div
          v-if="user"
          class="alert alert-success"
          role="alert"
        >🙋‍♀️Hi {{ user.data.displayName }}!</div>
        <div class="card">
          <div class="card-header">Day X</div>
          <div class="card-body">
            <img v-if="!hatchingTime" :src="images.egg" class="rounded mx-auto img-fluid" alt="egg" />
            <img v-if="hatchingTime" :src="images.cat" class="rounded mx-auto img-fluid" alt="cat" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapState } from "vuex";
import store from "../store";

export default {
  computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: "user"
    }),
    ...mapState(["now"]),
    hatchingTime: function() {
      if (this.now >= "09:00:00" && this.now < "18:00:00") {
        return false;
      } else {
        // TODO select cat depending on the day
        store.dispatch("addCat", "01"); // add cat to user's collection
        return true;
      }
    }
  },
  data() {
    return {
      images: {
        egg: require("../assets/egg.gif"),
        cat: require("../assets/01.gif")
      }
    };
  }
};
``;
</script>
