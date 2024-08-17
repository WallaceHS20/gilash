<template>

  <div class="main">
    <Carrousel :imagens="productStore.imagens" class="h-100"/>
  </div>

  <v-container>
    <v-row>
      <v-col cols="12" md="4" v-for="cilio in productStore.cilios" :key="cilio.nome">
        <CardProduct :cilios="cilio" />
      </v-col>
    </v-row>
  </v-container>
  <About/>
  
</template>

<script setup>
import CardProduct from '@/components/CardProduct/CardProduct.vue';
import Carrousel from '@/components/Carrousel/Carrousel.vue';
import { useProductStore } from '@/stores/product';
import About from '@/components/About/About.vue';

const productStore = useProductStore()

</script>

<style scoped>
.main{
  width: 100%;
  height: 650px;
}

.carrousel{
  height: 100%;
}

@media (max-width: 900px) {

.main {
  height: 400px;
}

}

</style>
