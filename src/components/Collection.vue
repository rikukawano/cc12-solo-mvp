<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div
          v-if="user"
          class="alert alert-success"
          role="alert"
        >🙋‍♀️You have a NEW cat {{ user.data.displayName }}!</div>
        <div class="d-flex align-content-start flex-wrap">
          <h2>{{ user.collection.length }} collected! 👏</h2>
          <div class="card w-50" v-for="(catId, index) in user.collection" v-bind:key="index">
            <img :src="getImgUrl(catId)" class="rounded mw-100 img-fluid" alt="egg" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: "user"
    })
  },
  methods: {
    getImgUrl(id) {
      return require("../assets/" + id + ".gif");
    }
  }
};
``;
</script>
