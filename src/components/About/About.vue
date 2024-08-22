<template>
    <v-card class="mx-auto">
        <!-- Parallax para desktop -->
        <v-parallax
            v-if="isDesktop"
            class="align-end text-white"
            width="100%"
            height="800"
            src="https://raw.githubusercontent.com/WallaceHS20/IMAGE-REPOSITORY/main/abt02.PNG"
            cover
        >
            <v-card-title>Gislaine Honorato</v-card-title>
        </v-parallax>

        <!-- Parallax para mobile -->
        <v-parallax
            v-else
            class="align-end text-white"
            width="100%"
            height="600"
            src="https://raw.githubusercontent.com/WallaceHS20/IMAGE-REPOSITORY/main/gih.jpg"
            cover
        >
            <v-card-title>Gislaine Honorato</v-card-title>
        </v-parallax>

        <Footer/>

        <v-card-subtitle class="pt-4 text-h6">
            Lash Designer
        </v-card-subtitle>

        <v-card-text>
            <div><strong>Especialista em realçar seu olhar com delicadeza e naturalidade... ❤️</strong></div>
        </v-card-text>
    </v-card>
</template>

<script setup>
import Footer from '../Footer/Footer.vue';
import { useDisplay } from 'vuetify';

const { mdAndUp } = useDisplay();

const isDesktop = mdAndUp;
</script>
