<template>
  <v-app>
    <v-app-bar theme="dark" rounded>
      <v-btn to="/">
        <v-icon start icon="mdi-chevron-right" color="green"></v-icon>
         cd
        <v-icon icon="mdi-tilde"></v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
          v-for="link in links"
          :key="link"
          variant="text"
          to="/about"
        >
          {{ link }}
        </v-btn>
    </v-app-bar>
  <v-main>
    <router-view />
  </v-main>
  </v-app>
</template>


<script>

export default {
  data: () => ({
    links: [
      'about',
      'resume',
      'blog',
    ],
  }),
}

</script>
