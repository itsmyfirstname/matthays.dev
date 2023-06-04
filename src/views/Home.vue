<template>
  <v-parallax src="/R.png" scale=".25">
    <!-- Greeting of the day -->
    <v-container fluid="true">
      <v-spacer class="pt-12"></v-spacer>
      <v-row>
        <v-col class="mt-16" cols="3">
          <h1 class="text-h1">good</h1>
          <div class="typewriter">
            <h1 v-if="morning" class="text-h1 text-highlight pb-2">morning</h1>
            <h1 v-if="afternoon" class="text-h1 text-secondary pb-2">afternoon</h1>
            <h1 v-if="evening" class="text-h1 text-primary pb-2">evening</h1>
          </div>
        </v-col>
      </v-row>
      <v-spacer class="ma-16"></v-spacer>
    </v-container>
    <v-spacer class="mb-16"></v-spacer>

    <!-- Quick Description -->
    <v-container fluid="true" class="mt-16">
      <v-row class="mt-16">
        <v-col class="mt-16" cols="10">
          <p class="text-h1 text-right">I'm Matt ... the |</p>
        </v-col>
        <v-col class="mt-12" cols="auto" align-self="end">
          <p class="text-h5 text-left text-primary align-bottom">software engineer</p>
          <p class="text-h5 text-left text-primary align-bottom">maker</p>
          <p class="text-h5 text-left text-primary align-bottom">student</p>
        </v-col>
      </v-row>
    </v-container>
    <v-spacer class="mb-16"></v-spacer>

    <!-- Highlight -->
    <v-container fluid="true">
      <v-col class="mt-16">
        <v-row class="mt-16">
          <v-sheet class="mt-16 mx-auto d-flex" elevation="8" height="400" width="100%" color="background">
            <v-col align-self="center" cols="6">
              <v-row class="d-flex">
                <v-icon class="ma-6" icon="mdi-vuetify" size="100" ></v-icon>
                <v-icon class="ma-6" icon="mdi-kubernetes" size="100"></v-icon>
                <v-icon class="ma-6" icon="mdi-redhat" size="100"></v-icon>
                <v-icon class="ma-6" icon="mdi-ansible" size="100"></v-icon>
              </v-row>
              <v-row>

                <v-icon class="ma-6" icon="mdi-language-python" size="100"></v-icon>
                <v-icon class="ma-6" icon="mdi-bash" size="100"></v-icon>
                <v-icon class="ma-6" icon="mdi-terraform" size="100"></v-icon>
                <v-icon class="ma-6" icon="mdi-aws" size="100"></v-icon>
              </v-row>
            </v-col>
            <v-col align-self="center" cols="auto">
              <v-card elevation="12">
                <v-card-title>
                  <h1 class="text-h1"></h1>
                </v-card-title>
                <v-card-subtitle>
                  <h2 class="text-h2">
                    accross the stack
                  </h2>
                </v-card-subtitle>
                <v-card-text>
                  <!-- <h3 class="text-h3">and still learning</h3> -->
                </v-card-text>
              </v-card>
            </v-col>
          </v-sheet>
        </v-row>
      </v-col>
    </v-container>
  </v-parallax>

  <!-- <v-container fluid="true"> -->
  <!-- </v-container> -->
  <!-- <Timeline></Timeline> -->
</template>

<script>
import Timeline from '@/components/Timeline.vue';
import Resume from '@/components/Resume.vue'

export default {
  components: {
    Timeline,
    Resume
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
.typewriter h1 {
  overflow: auto;
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
    typing 1.4s steps(7, end),
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

