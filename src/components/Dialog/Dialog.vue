<template>
    <v-btn prepend-icon="mdi mdi-whatsapp" color="Rose01" text="Reserve" block border>
        <div class="text-none font-weight-regular">
            RESERVAR
        </div>

        <v-dialog activator="parent" max-width="500">
            <template v-slot:default="{ isActive }">
                <v-card rounded="lg">
                    <v-card-title class="d-flex justify-space-between align-center">
                        <div class="text-h5 text-medium-emphasis ps-2">
                            {{ props.tickets.nome }}
                        </div>

                        <v-btn icon="mdi-close" variant="text" @click="isActive.value = false"></v-btn>
                    </v-card-title>

                    <v-divider class="mb-4"></v-divider>

                    <v-card-text>
                        <div class="text-medium-emphasis mb-4">
                            <v-img class="rounded-lg" height="250" :src="props.tickets.foto" cover></v-img>
                        </div>

                        <div class="mb-2">Agendamento</div>

                        <v-form ref="formRef">
                            <v-row>
                                <!-- Nome ocupando 100% da largura -->
                                <v-col cols="12">
                                    <v-text-field
                                      clearable
                                      label="Nome"
                                      class="mt-2"
                                      variant="outlined"
                                      hide-details="auto"
                                      placeholder="Fernanda Silva"
                                      type="text"
                                      v-model="formData.clienteNome"
                                      :rules="nomeRules"
                                    />
                                </v-col>

                                <!-- Data e Checkbox na mesma linha -->
                                <v-col cols="12" md="6">
                                    <v-text-field
                                      clearable
                                      label="Data Pretendida"
                                      variant="outlined"
                                      hide-details="auto"
                                      type="date"
                                      v-model="formData.data"
                                      :rules="dataRules"
                                    ></v-text-field>
                                </v-col>

                                <v-col cols="12" md="6" class="d-flex align-center justify-center">
                                    <v-text-field
                                      clearable
                                      label="Hora Pretendida"
                                      variant="outlined"
                                      hide-details="auto"
                                      type="time"
                                      v-model="formData.time"
                                      :rules="timeRules"
                                    ></v-text-field>
                                </v-col>
                                <v-checkbox
                                        label="Apenas Manutenção"
                                        type="checkbox"
                                        value="1"
                                        color="Rose01"
                                        v-model="formData.manutencao"
                                    >
                                </v-checkbox>
                            </v-row>
                        </v-form>

                        <div class="text-overline">💎 valor total</div>

                        <v-btn class="text-h6 font-weight-bold ms-n4" color="Rose01" variant="text">
                           R$ {{ formData.manutencao? props.tickets.manutencao : props.tickets.valor}}
                        </v-btn>
                    </v-card-text>

                    <v-divider class="mt-2"></v-divider>

                    <v-card-actions class="my-2 d-flex justify-end">
                        <v-btn class="text-none" rounded="xl" text="Cancel" @click="isActive.value = false"></v-btn>

                        <v-btn
                            class="text-none"
                            prepend-icon="mdi mdi-whatsapp"
                            color="Rose01"
                            text="Confirmar"
                            variant="flat"
                            @click="validateForm()"
                        ></v-btn>
                    </v-card-actions>
                </v-card>
            </template>
        </v-dialog>
    </v-btn>
</template>

<script setup>
import { defineProps, ref } from 'vue'
import { useDialogStore } from '@/stores/dialog';
import { useAlertStore } from '@/stores/alert';

const storeDialog = useDialogStore()

const formRef = ref(null);
const formData = ref({
    clienteNome: '',
    data: '',
    time: '',
    manutencao: false
});

const nomeRules = [
    value => !!value || 'Nome é obrigatório',
    value => value.length >= 8 || 'O nome deve ter pelo menos 8 caracteres',
]

const dataRules = [
    value => !!value || 'Data é obrigatória',
]

const timeRules = [
    value => !!value || 'Hora é obrigatória',
]

const props = defineProps({
    tickets: Object
})

const validateForm = async () => {
    const { valid } = await formRef.value.validate();

    if (valid) {

        //TRATAMENTO DE DATA
        const data = new Date(formData.value.data).toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });

        //  CRIAÇÃO DO OBJETO TICKETS PARA STORE DE ENVIO AO WHATSAPP
        const time = formData.value.time;
        let tickets = {
            produtoNome: props.tickets.nome,
            produtoValor: props.tickets.valor,
            clienteNome: formData.value.clienteNome,
            data: data,
            time: time,
            manutencao: formData.value.manutencao,
            manutencaoValor: props.tickets.manutencao,
        }
        
        storeDialog.reserve(tickets)
        
    }
};
</script>
