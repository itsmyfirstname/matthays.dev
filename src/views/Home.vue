<template>
  <v-parallax src="/R.png" scale=".25">

    <v-container fluid="true">
      <v-spacer class="pt-12"></v-spacer>
      <v-row no-gutters>
        <v-col class="mt-16">
          <p class="text-h1">good </p>
          <p v-if="morning" class="text-h1">morning</p>
          <p v-if="afternoon" class="text-h1">afternoon</p>
          <p v-if="evening" class="text-h1">evening</p>
        </v-col>
      </v-row>
    </v-container>

  </v-parallax>
  <!-- <Timeline></Timeline> -->
</template>

<script>
import Timeline from '@/components/Timeline.vue';

export default {
  components: {
    Timeline,
    ProjectCards
  },
  methods: {
    getHour: function () {
      return new Date().getHours();
    }
  },
  mounted: function () {
    this.hour = this.getHour(),
    this.morning = this.hour < 12 
    this.afternoon = 12 <= this.hour && this.hour < 19
    this.evening = 19 <= this.hour && this.hour < 24
  },
  data: () => ({
    hour: "",
    morning: "",
    afternoon: "",
    evening: ""
  }),
}
</script>

<style>
.typewriter p {
  overflow: scroll;
  /* Ensures the content is not revealed until the animation */
  border-right: .15em solid #7CDEDC;
  /* The typewriter cursor */
  white-space: nowrap;
  /* Keeps the content on a single line */
  margin: 0 auto;
  /* Gives that scrolling effect as the typing happens */
  letter-spacing: .15em;
  /* Adjust as needed */
  animation:
    typing 3.7s steps(20, end),
    blink-caret .5s step-end infinite;
}



/* The typing effect */
@keyframes typing {
  from {
    width: 0
  }

  to {
    width: 100%
  }
}

/* The typewriter cursor effect */
@keyframes blink-caret {

  from,
  to {
    border-color: transparent
  }

  40% {
    border-color: #16a19f;
  }
}
</style>

