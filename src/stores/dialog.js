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

- Avenida princesa Isabel n° 1716 / Santana (Dentro da Loja Paty Decoração)

Muito obrigada!`;
      
            const encodedMessage = encodeURIComponent(message); // Codifica a mensagem para URL
            const whatsappUrl = `https://wa.me/${this.phoneNumber}?text=${encodedMessage}`;
      
            window.open(whatsappUrl, '_blank'); // Abre o link em uma nova aba
          }
    }
})
