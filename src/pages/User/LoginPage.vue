<template>

  <div class="user-image-container">
    <v-img class="image-user animate__animated animate__fadeIn" aspect-ratio="1/1" cover
      gradient="to top right, rgba(0,0,0,.33), rgba(0,0,0,.7)" src="@/assets/capaUserForm.png" />
  </div>

  <div class="user-form-container">

    <img class="" width="350" src="@/assets/LogoGiHonorato.png" />

    <h1>Bem vinda!</h1>
    <span>Venha renovar o brilho do seu olhar</span>

    <form @submit.prevent="submit" class="login-form" aspect-ratio="1/1">
      <v-text-field v-model="email.value.value" :error-messages="email.errorMessage.value" clearable label="E-mail"
        prepend-icon="mdi mdi-email-outline" variant="outlined" hide-details="auto" placeholder="marina@gmail.com"
        type="email" />

      <v-text-field v-model="password.value.value" :error-messages="password.errorMessage.value" class="mt-5" clearable
        label="Senha" prepend-icon="mdi mdi-lock" variant="outlined" />

      <v-btn prepend-icon="mdi mdi-send-circle" class="pa-6 mt-5" color="Rose01" variant="outlined" type="submit" block>
        Acessar
      </v-btn>
    </form>

  </div>

</template>

<script setup>
import 'animate.css';
import { useUserStore } from '@/stores/user'
import { useField, useForm } from 'vee-validate'

const userStore = useUserStore()

const { handleSubmit } = useForm({
  validationSchema: {

    email(value) {
      if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true

      return 'Insira um e-mail válido.'
    },

    password(value) {
      const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

      if (regex.test(value)) return true;

      return 'A senha exige no mímimo 8 caracteres, incluindo pelo menos uma letra maiúscula, uma letra minúscula e um número';
    }

  },
})

const submit = handleSubmit(values => {
  userStore.loginUser(values)
})

const email = useField('email')
const password = useField('password')

</script>


<style scoped>

h1 {
  font-weight: 500;
  font-style: normal;
  font-size: 40px;
  letter-spacing: 2px
}

span {

  font-weight: 480;
  font-style: normal;
  font-size: 18px;
  letter-spacing: 2px
}

.user-image-container {
  width: 45%;
  display: block;
}

.image-user {
  width: 100%;
  height: 100%;
}

.user-form-container {
  width: 55%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px;
}

.login-form {
  margin-top: 15px;
  width: 80%;
  padding: 15px;
}

@media (max-width: 900px) {

  .user-image-container {
    display: none;
  }

  .user-form-container {
    width: 100%;
  }

  .login-form {
    width: 100%;
  }
}
</style>