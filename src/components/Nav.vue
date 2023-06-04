<template>
    <v-app-bar color="background" scroll-behavior="collapse hide fade-image inverted elevate">
        <v-btn to="/" color="white">
            <v-icon icon="mdi-chevron-right" color="secondary"></v-icon>
            <v-app-bar-title text="cd"></v-app-bar-title>
            <v-icon end size="x-small" icon="mdi-tilde" color="highlight"></v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn to="/working" color="primary">
            <p>contact</p>
        </v-btn>
        <v-btn to="/working" color="secondary">
            <p>resume</p>
        </v-btn>
        <v-btn to="/about" color="highlight">
            About
        </v-btn>
    </v-app-bar>
</template>


<script scoped>
</script>
