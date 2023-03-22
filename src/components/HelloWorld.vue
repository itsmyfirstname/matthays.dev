<template>
  <v-container fluid bg>
    <v-row no-gutters fluid align-content="end">
      <v-col align-self="center">
        <v-sheet color="primary" width="30%">
          <div class="typewriter">
            <h1>howdy! i'm matt...</h1>
          </div>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

.typewriter h1 {
    overflow: scroll; /* Ensures the content is not revealed until the animation */
    border-right: .15em solid #7CDEDC; /* The typwriter cursor */
    white-space: nowrap; /* Keeps the content on a single line */
    margin: 0 auto; /* Gives that scrolling effect as the typing happens */
    letter-spacing: .15em; /* Adjust as needed */
    animation: 
      typing 3.5s steps(30, end),
      blink-caret .25s step-end infinite;
  }
  
  /* The typing effect */
  @keyframes typing {
    from { width: 0 }
    to { width: 100% }
  }
  
  /* The typewriter cursor effect */
  @keyframes blink-caret {
    from, to { border-color: transparent }
    50% { border-color: #7CDEDC; }
  }
</style>

<script>
// export default {
//     data: () => ({
//       links: [
//         'about',
//         'resume',
//         'blog',
//       ],
//     }),
//   }
</script>