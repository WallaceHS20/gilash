import { defineStore } from 'pinia'
import router from '@/router'
import { useAlertStore } from './alert'

const alertStore = useAlertStore()

export const useUserStore = defineStore('user', {
  state: () => ({
    user: {
      name: '',
      email: '',
      password: '',
      securityPhrase: ''
    }
  }),
  actions: {
    createUser() {
      
    },
    loginUser(user) {
      if (user.email === 'admin@gmail.com' && user.password === 'Troca@2023') {

        this.user = {
          ...this.user,
          email: user.email,
          password: user.password,
          name: 'Admin'
        }

        this.setDataUser()
        router.push('/home')
        
      } else {
        alertStore.IncorrectPassword()
        return false
      }
    },
    updateUser() {
      // Implementação da atualização do usuário
    },
    setDataUser() {
      localStorage.setItem('userData', JSON.stringify(this.user))
    },
    getDataUser() {
      let items = localStorage.getItem('userData')
      if (items) {
        this.user = JSON.parse(items)
      }
    },
  }
})
