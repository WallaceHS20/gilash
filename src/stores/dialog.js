// Utilities
import { defineStore } from 'pinia'

export const useDialogStore = defineStore('dialog', {
    state: () => ({
        showDialog: false,
        phoneNumber: '5512997922716'
    }),

    actions: {

        showDialog(){
            this.showDialog = true
        },

        closeDialog(){
            this.showDialog = false
        },

        reserve(ticket) {
            let message = `Olá, Gihh!!
      
Gostaria de realizar um agendamento:

- *Cliente*: ${ticket.clienteNome}

- *Serviço*: ${ticket.produtoNome}

- *Manutenção*: ${ticket.manutencao? 'Sim' : 'Não'}

- *Horário Pretendido*: ${ticket.data} ${ticket.time}

- *Valor*: R$ ${ticket.manutencao? ticket.manutencaoValor : ticket.produtoValor}

Endereço:

- Rua Manoel Rozendo de Oliveira n° 53 / Alto da Ponte (Ao lado da Adonai Fitness)

Muito obrigada!`;
      
            const encodedMessage = encodeURIComponent(message); 
            const whatsappUrl = `https://wa.me/${this.phoneNumber}?text=${encodedMessage}`;
      
            window.open(whatsappUrl, '_blank'); 
          }
    }
})
