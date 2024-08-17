<template>
  <v-app id="inspire">

    <v-app-bar>
      <div>
        <span class=" pa-2 text-h6"> GISLAINE HONORATO LASH </span> 
      </div>
    </v-app-bar>

    <v-main>
      <RouterView/>
      <ButtonFloat/>
    </v-main>
  </v-app>
</template>

<script setup>
  import { ref } from 'vue'
  import ButtonFloat from '@/components/ButtonFloat/ButtonFloat.vue'
</script>
