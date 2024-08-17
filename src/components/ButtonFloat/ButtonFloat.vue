<template>
  <v-fab @click="goToInstagram" color="Rose03" icon="mdi mdi-instagram" class="position-fixed mb-4" location="bottom end"
    size="64" absolute app appear></v-fab>
</template>
<script setup>
function goToInstagram() {
  window.open('https://www.instagram.com/gi_honoratolash?igsh=dWgwZWhidG85djdy', '_blank');
}
</script>