<template>
  <div class="login-layout-conatiner">
    <router-view />
    <Alert v-if="alertStore.showAlert"/>
  </div>
</template>
  
<script setup>

import Alert from '@/components/Alert/Alert.vue'
import { useAlertStore } from '@/stores/alert';

const alertStore = useAlertStore()

</script>

<style scoped>

*{
  padding: 0;
  border: 0;
  box-sizing: border-box;
}

.login-layout-conatiner{
  width: 100%;
  height: 100vh;
  display: flex;
  
}
</style>