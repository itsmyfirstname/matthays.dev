<template>
  <v-app>
    <v-card>
      <v-parallax src="/background.png">
      <v-layout>
          <v-main>
            <v-container class="ma-16">
              <home/>
            </v-container>
            <v-container>
              <about></about>
            </v-container>
          </v-main>
        </v-layout>
      </v-parallax>
      </v-card>
  </v-app>
</template>

<script setup>
import Home from './views/Home.vue';
import About from './views/About.vue';

</script>
