<template>
  <v-app>
    <Nav></Nav>
    <v-main>  
        <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import Nav from "@/components/Nav.vue"
</script>
