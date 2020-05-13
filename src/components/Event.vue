<template>
  <div>
    <b-card no-body class="overflow-hidden" style="max-width: 540px;">
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
export default {
  name: "Event",
  props: ["event"],
};
</script>

<style></style>
