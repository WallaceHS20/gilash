<template>
    <v-carousel
      height="400"
      show-arrows="hover"
      cycle
      hide-delimiter-background
    >
      <v-carousel-item
        v-for="(item, i) in props.imagens"
        :key="i"
      >
        <v-sheet
          height="100%"
          width="100%"
          tile
          :style="{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9)), url(${item.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }"
        >

        <div class="d-flex fill-height justify-center text-center align-center text-white">
          <div class="text-h4">
            {{ item.mensagem }}
          </div>
        </div>
        </v-sheet>
        
      </v-carousel-item>
    </v-carousel>
  </template>
  
  <script setup>
  import { defineProps } from 'vue'

  const props = defineProps({
    imagens: Object
  })
  </script>
  