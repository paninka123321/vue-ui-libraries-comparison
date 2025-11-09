<template>
  <div class="card p-5 shadow-2 border-round-lg max-w-md mx-auto">
    <h2 class="text-2xl font-semibold mb-4 text-primary text-center">Rejestracja</h2>

    <form @submit.prevent="handleSubmit" class="flex flex-column gap-4">
      <div class="field">
        <label class="font-medium mb-2 block">Nazwa użytkownika</label>
        <InputText v-model="form.username" placeholder="Podaj nazwę" class="w-full" />
        <small v-if="errors.username" class="p-error">{{ errors.username }}</small>
      </div>

      <div class="field">
        <label class="font-medium mb-2 block">Hasło</label>
        <Password v-model="form.password" toggleMask feedback="false" class="w-full" />
        <small v-if="errors.password" class="p-error">{{ errors.password }}</small>
      </div>

      <div class="field">
        <label class="font-medium mb-2 block">Data urodzenia</label>
        <Calendar v-model="form.birthdate" dateFormat="yy-mm-dd" class="w-full" />
        <small v-if="errors.birthdate" class="p-error">{{ errors.birthdate }}</small>
      </div>

      <div class="field">
        <label class="font-medium mb-2 block">Płeć</label>
        <div class="flex gap-3">
          <div class="flex align-items-center gap-2" v-for="g in genders" :key="g">
            <RadioButton :inputId="g" name="gender" :value="g" v-model="form.gender" />
            <label :for="g">{{ g }}</label>
          </div>
        </div>
        <small v-if="errors.gender" class="p-error">{{ errors.gender }}</small>
      </div>

      <div class="field flex align-items-center gap-2">
        <Checkbox inputId="newsletter" v-model="form.newsletter" binary />
        <label for="newsletter">Zapisz mnie do newslettera</label>
    </div>

      <div class="flex justify-content-end mt-3">
        <Button label="Zarejestruj" type="submit" class="p-button-success px-5 py-2" />
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'
import Calendar from 'primevue/calendar'
import RadioButton from 'primevue/radiobutton'
import Checkbox from 'primevue/checkbox'
import Button from 'primevue/button'

const form = ref({
  username: '',
  password: '',
  birthdate: null,
  gender: '',
  newsletter: false,
})

const genders = ['Kobieta', 'Mężczyzna', 'Inna']
const errors = ref({})

const validate = () => {
  const e = {}
  if (!form.value.username) e.username = 'Podaj nazwę użytkownika'
  if (!form.value.password || form.value.password.length < 6)
    e.password = 'Hasło musi mieć min. 6 znaków'
  if (!form.value.birthdate) e.birthdate = 'Podaj datę urodzenia'
  if (!form.value.gender) e.gender = 'Wybierz płeć'
  errors.value = e
  return Object.keys(e).length === 0
}

const handleSubmit = () => {
  if (validate()) {
    alert('Zarejestrowano użytkownika:\n' + JSON.stringify(form.value, null, 2))
  }
}
</script>

<style scoped>
.max-w-md {
  max-width: 450px;
}
.mx-auto {
  margin-left: auto;
  margin-right: auto;
}
</style>
