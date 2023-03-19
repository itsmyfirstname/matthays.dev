<template>
  <v-app>
    <v-app-bar theme="dark" rounded>
      <!-- <v-img
        src="src/assets/logo.png"
        max-height="140"
        max-width="140"
      ></v-img> -->

      <v-btn
        class="ma-2"
        color="primary"
        to="/home"
      >
        cd
        <v-icon
          end
          icon="mdi-tilde"
        ></v-icon>
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
