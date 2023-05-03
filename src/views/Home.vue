<template>
  <div class="d-flex flex-column fill-height justify-center align-center text-white">
    <div class="typewriter">
      <v-card-text>
        <h1>Nice to meet you</h1>
      </v-card-text>
    </div>
  </div>
</template>

<script>

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

