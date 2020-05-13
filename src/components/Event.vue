<template>
  <div>
    <b-card
      no-body
      :class="selected"
      class="overflow-hidden mt-2"
      style="max-width: 50rem;"
    >
      <b-row no-gutters>
        <b-col md="6">
          <b-card-body>⏳{{ event.length }} mins</b-card-body>
        </b-col>
        <b-col md="6">
          <b-card-body>
            <b-card-text>{{ event.name }}</b-card-text>
            <b-card-text
              >{{ event.startTime }} - {{ event.endTime }}</b-card-text
            >
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Event",
  props: ["event"],
  computed: {
    ...mapState(["now"]),
  },
  data() {
    return {
      selected: "",
    };
  },
  watch: {
    now() {
      if (this.now >= this.event.startTime && this.now <= this.event.endTime) {
        this.selected = "bg-primary text-white";
      }
    },
  },
};
</script>

<style></style>
