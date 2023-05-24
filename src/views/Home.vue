<template>
  <v-parallax src="/R.png" scale=".25">
    <v-container fluid="true">
      <v-spacer class="pt-12"></v-spacer>
      <v-row no-gutters>
        <v-col class="mt-16">
          <p class="text-h1">good </p>
          <p v-if="morning" class="text-h1 text-primary">morning</p>
          <p v-if="afternoon" class="text-h1 text-primary">afternoon</p>
          <p v-if="evening" class="text-h1 text-primary">evening</p>
        </v-col>
      </v-row>
      <v-spacer class="ma-16"></v-spacer>
    </v-container>
    <v-spacer class="mt-12"></v-spacer>
    <v-container fluid="true">
      <v-row class="mt-16" >
        <v-col class="mt-16" cols="10" >
          <p class="text-h2 text-right">I'm Matt the ... |</p>
        </v-col>
        <v-col class="mt-12" cols="auto">
          <p class="text-h5 text-left text-primary align-bottom">software engineer</p>
          <p class="text-h5 text-left text-primary align-bottom">maker</p>
          <p class="text-h5 text-left text-primary align-bottom">student</p>
        </v-col>
      </v-row>
    </v-container>

  </v-parallax>
  <v-sheet height="50px" elevation="12" color="background" class="d-flex align-center justify-center flex-wrap text-center mx-auto">
    <h1 class="text-h4 font-weight-black text-highlight">Timeline</h1>
  </v-sheet>
  <Timeline></Timeline>
</template>

<script>
import Timeline from '@/components/Timeline.vue';

export default {
  components: {
    Timeline
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

