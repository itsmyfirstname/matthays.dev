<template>
  <v-app>
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
    <v-parallax src="background.png">
    <router-view />
      </v-parallax>
  </v-app>
</template>

<script setup>
</script>
