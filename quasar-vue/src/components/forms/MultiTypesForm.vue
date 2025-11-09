<template>
  <q-card class="my-card p-4">
    <div class="text-h6 mb-4">Multi-types Form (Quasar)</div>
    <q-form @submit.prevent="handleSubmit" class="q-gutter-md">
      <q-input filled v-model="form.username" label="Nazwa użytkownika" :error="!!errors.username" :error-message="errors.username" />
      <q-input filled v-model="form.password" type="password" label="Hasło" :error="!!errors.password" :error-message="errors.password" />
      <q-input filled v-model="form.birthdate" type="date" label="Data urodzenia" :error="!!errors.birthdate" :error-message="errors.birthdate" />

      <q-option-group
        v-model="form.gender"
        :options="[{ label:'Kobieta', value:'Kobieta' },{ label:'Mężczyzna', value:'Mężczyzna' },{ label:'Inna', value:'Inna' }]"
        type="radio"
        inline
        label="Płeć"
        :error="!!errors.gender"
      />

      <q-checkbox v-model="form.newsletter" label="Zapisz mnie do newslettera" />

      <q-btn label="Zarejestruj" color="primary" type="submit" class="full-width" />
    </q-form>
  </q-card>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({ username: '', password: '', birthdate: '', gender: '', newsletter: false })
const errors = reactive({})

const validate = () => {
  errors.username = form.username ? '' : 'Required'
  errors.password = form.password.length >= 6 ? '' : 'Min 6 chars'
  errors.birthdate = form.birthdate ? '' : 'Required'
  errors.gender = form.gender ? '' : 'Required'
  return !errors.username && !errors.password && !errors.birthdate && !errors.gender
}

const handleSubmit = () => { if(validate()) alert(JSON.stringify(form, null, 2)) }
</script>

<style scoped>
.my-card { max-width: 400px; margin: 1rem auto; }
</style>
