<template>
  <div class="card p-5 shadow-2 border-round-lg max-w-3xl mx-auto">
    <h2 class="text-2xl font-semibold mb-4 text-primary text-center">Dane osobowe</h2>

    <form @submit.prevent="handleSubmit" class="flex flex-column gap-4">
      <!-- ✅ Row 1: Imię + Nazwisko -->
      <div class="grid formgrid gap-3">
        <div class="field col">
          <label for="firstName" class="font-medium mb-2 block">Imię</label>
          <InputText
            id="firstName"
            v-model="form.firstName"
            placeholder="Wpisz imię"
            class="w-full"
          />
          <small v-if="errors.firstName" class="p-error">{{ errors.firstName }}</small>
        </div>

        <div class="field col">
          <label for="lastName" class="font-medium mb-2 block">Nazwisko</label>
          <InputText
            id="lastName"
            v-model="form.lastName"
            placeholder="Wpisz nazwisko"
            class="w-full"
          />
          <small v-if="errors.lastName" class="p-error">{{ errors.lastName }}</small>
        </div>
      </div>

      <!-- ✅ Row 2: Płeć + Wiek -->
      <div class="grid formgrid gap-3">
        <div class="field col">
          <label for="gender" class="font-medium mb-2 block">Płeć</label>
          <Dropdown
            id="gender"
            v-model="form.gender"
            :options="['Kobieta', 'Mężczyzna', 'Inna']"
            placeholder="Wybierz płeć"
            class="w-full"
          />
          <small v-if="errors.gender" class="p-error">{{ errors.gender }}</small>
        </div>

        <div class="field col">
          <label for="age" class="font-medium mb-2 block">Wiek</label>
          <InputText
            id="age"
            v-model.number="form.age"
            type="number"
            placeholder="Podaj wiek"
            class="w-full"
          />
          <small v-if="errors.age" class="p-error">{{ errors.age }}</small>
        </div>
      </div>

      <div class="flex justify-content-end mt-4">
        <Button label="Zapisz" type="submit" class="p-button-success px-5 py-2" />
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import InputText from 'primevue/inputtext'
import Dropdown from 'primevue/dropdown'
import Button from 'primevue/button'

const form = ref({
  firstName: '',
  lastName: '',
  gender: '',
  age: null,
})

const errors = ref({})

const validate = () => {
  const e = {}
  if (!form.value.firstName) e.firstName = 'Imię jest wymagane'
  if (!form.value.lastName) e.lastName = 'Nazwisko jest wymagane'
  if (!form.value.gender) e.gender = 'Wybierz płeć'
  if (!form.value.age || form.value.age < 1) e.age = 'Podaj poprawny wiek'
  errors.value = e
  return Object.keys(e).length === 0
}

const handleSubmit = () => {
  if (validate()) {
    alert(`Wysłano formularz:\n${JSON.stringify(form.value, null, 2)}`)
    form.value = { firstName: '', lastName: '', gender: '', age: null }
  }
}
</script>

<style scoped>
.card {
  background-color: var(--surface-card);
}
.max-w-3xl {
  max-width: 700px;
}
.mx-auto {
  margin-left: auto;
  margin-right: auto;
}
.field label {
  color: var(--text-color);
}
</style>
