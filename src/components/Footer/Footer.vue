<template>
    <v-footer class="bg-Rose01 text-center d-flex flex-column">
      <div>
        <v-btn
          v-for="(icon, index) in icons"
          :key="index"
          :href="icon.link"
          class="mx-4 text-white"
          icon
          target="_blank"
          variant="text"
        > 
          <v-icon :icon="icon.icon"></v-icon>
        </v-btn>
      </div>
    </v-footer>
  </template>
  
  <script setup>
  const icons = [
    {
      icon: 'mdi-instagram',
      link: 'https://www.instagram.com/giislainebordinhon/',
    },
    {
      icon: 'mdi-facebook',
      link: 'https://www.facebook.com/seu_usuario',
    },
    {
      icon: 'mdi-twitter',
      link: 'https://www.twitter.com/seu_usuario',
    },
  ];
  </script>
  