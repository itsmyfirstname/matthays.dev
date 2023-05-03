<template>
  <v-parallax src="/background.png" scale=".5">
    <div class="d-flex flex-column fill-height justify-center align-center text-white">
      <div class="typewriter">
        <!-- <v-card> -->
          <v-card-text>
            <h1>hi...im matt</h1>
          </v-card-text>
        <!-- </v-card> -->
      </div>
    </div>
  </v-parallax>
  
  <!-- <v-parallax src="/background2.png" scale="1"> -->
    <v-container>
      <Timeline></Timeline>
    </v-container>
  <!-- </v-parallax> -->

  <!-- <v-container>
  </v-container> -->
</template>

<script>
import Timeline from '@/components/Timeline.vue'

export default {
  components: {
    Timeline
  }
}
</script>

<style>
.typewriter h1 {
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
    typing 3.5s steps(30, end),
    blink-caret .25s step-end infinite;
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

