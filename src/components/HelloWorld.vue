<template>
  <v-app id="inspire">
    <v-main class="bg-grey-lighten-3">
      <div>
      <v-container class="bg-surface-variant mb-6">
        <v-row
        align="end"
        no-gutters
        style="height: 150px;"
      >
        <v-col
          v-for="n in 3"
          :key="n"
        >
          <v-sheet class="pa-2 ma-2">
            .align-end
          </v-sheet>
        </v-col>
      </v-row>
      </v-container>
    </div>
    </v-main>
  </v-app>
</template>

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