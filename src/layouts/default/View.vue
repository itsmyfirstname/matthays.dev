<template>
  <v-app class="pa-md-16">
    <v-app-bar color="primary">
      <v-btn to="/">
        <v-icon end icon="mdi-chevron-right" color="highlight"></v-icon>
         cd
        <v-icon end icon="mdi-tilde"></v-icon>
      </v-btn>
      <v-spacer></v-spacer>
        <v-btn to="about">
          about
        </v-btn>
        
        <v-btn to="resume">
          resume
        </v-btn>
        
        <v-btn to="blog">
          blog
        </v-btn>
    </v-app-bar>
  <v-main>
    <router-view />
  </v-main>
  </v-app>
</template>


<script>
</script>
