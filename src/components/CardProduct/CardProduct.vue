<template>
    <div>
        <v-card :disabled="loading" :loading="loading" class="mx-auto my-12" max-width="374">
            <template v-slot:loader="{ isActive }">
                <v-progress-linear :active="isActive" color="deep-purple" height="4" indeterminate></v-progress-linear>
            </template>

            <v-img height="250" :src="props.cilios.foto" cover></v-img>

            <v-card-item>
                <v-card-title>{{ props.cilios.nome }}</v-card-title>

                <v-card-subtitle v-if="props.cilios.maisVendido">
                    <span class="me-1">Mais pedidos</span>
                    <v-icon color="error" icon="mdi-fire-circle" size="small"></v-icon>
                </v-card-subtitle>
            </v-card-item>

            <v-card-text>
                <v-row align="center" class="mx-0">
                    <v-rating :model-value="props.cilios.nota" color="Rose01" density="compact" size="small" half-increments
                        readonly></v-rating>

                    <div class="text-grey ms-4">
                        {{ props.cilios.nota }}
                    </div>
                </v-row>

                <div class="my-4 text-subtitle-1 font-weight-black">
                    R$ {{ props.cilios.valor }}
                </div>

                <div>{{ props.cilios.descricao }}
                </div>
            </v-card-text>

            <v-divider v-if="props.cilios.manutencao" class="mx-4 mb-1"></v-divider>

            <v-card-subtitle v-if="props.cilios.manutencao" class="font-weight-black">Manutenção R$ {{ props.cilios.manutencao }}</v-card-subtitle>

            <v-card-actions>
                <Dialog :tickets="cilios"/>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { defineProps } from 'vue'
import Dialog from '@/components/Dialog/Dialog.vue';

const props = defineProps({
    cilios: Object
})

// Use ref to make 'loading' reactive
const loading = ref(false)
const selection = ref(1)

function reserve() {
    loading.value = true

    setTimeout(() => {
        loading.value = false
    }, 2000)
}

</script>
