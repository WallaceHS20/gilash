// Utilities
import { defineStore } from 'pinia'

export const useAlertStore = defineStore('alert', {
  state: () => ({
    showAlert: false,
    message:'',
    type: 'error',
  }),
  actions : {
    notifyAlert(){
        this.showAlert = true;
        setTimeout(() => {
            this.showAlert = false
        }, 4000);
    },

    IncorrectPassword(){
      this.message = 'A senha está incorreta!',
      this.type = 'error'
      this.notifyAlert()
    }
  }
})
