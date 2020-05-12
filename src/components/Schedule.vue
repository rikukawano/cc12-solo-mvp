<template>
  <div class="schedule">
    <Event v-for="schedule in schedules" v-bind:key="schedule.id" v-bind:event="schedule" />
  </div>
</template>

<script>
import Event from "./Event.vue";

export default {
  name: "Schedule",
  data: function() {
    return {
      schedules: [
        {
          id: 1,
          name: "🌞Morning Stand-up",
          startTime: "9:00",
          endTime: "9:15",
          length: 15
        },
        {
          id: 2,
          name: "👾Block 1",
          startTime: "9:15",
          endTime: "0:45",
          length: 90
        },
        {
          id: 3,
          name: "☕️Morning Break",
          startTime: "10:45",
          endTime: "11:00",
          length: 15
        },
        {
          id: 4,
          name: "👾Block 2",
          startTime: "11:00",
          endTime: "12:30",
          length: 90
        },
        {
          id: 5,
          name: "🍔Lunch Break",
          startTime: "12:30",
          endTime: "13:30",
          length: 60
        },
        {
          id: 6,
          name: "🎤After Lunch Stand-up",
          startTime: "13:30",
          endTime: "13:45",
          length: 15
        },
        {
          id: 7,
          name: "👾Block 3",
          startTime: "13:45",
          endTime: "15:15",
          length: 90
        },
        {
          id: 8,
          name: "☕️Afternoon Break",
          startTime: "15:15",
          endTime: "15:30",
          length: 15
        },
        {
          id: 9,
          name: "👾Block 4",
          startTime: "15:30",
          endTime: "17:00",
          length: 90
        },
        {
          id: 10,
          name: "👾Block 5",
          startTime: "17:00",
          endTime: "17:50",
          length: 50
        },
        {
          id: 11,
          name: "🥳Closing Party",
          startTime: "17:50",
          endTime: "18:00",
          length: 10
        }
      ]
    };
  },
  components: {
    Event
  }
};
</script>

<style>
</style>
