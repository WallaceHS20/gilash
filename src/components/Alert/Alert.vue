<template>
    <div class="alert-notification">
        <v-alert
            class="animate__animated animate__backInUp"
            :text="alertStore.message"
            :type="alertStore.type" />
    </div>
</template>

<script setup>
import 'animate.css';
import { useAlertStore } from '@/stores/alert';

const alertStore = useAlertStore()

</script>

<style scoped>
.alert-notification{
    position: fixed;
    z-index: 1;
    width: 100%;
    bottom: 50px;
    padding: 0px 30%;
}

@media (max-width: 900px) {

 .alert-notification{
    padding: 15px;
 }
}
</style>