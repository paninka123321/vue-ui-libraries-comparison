<template>
  <q-card class="my-card p-4">
    <div class="text-h6 mb-4">Multi-row Form (Quasar)</div>
    <q-form @submit.prevent="handleSubmit" class="q-gutter-md">
      <div class="row q-col-gutter-md">
        <div class="col-12 md:col-6">
          <q-input filled v-model="form.firstName" label="Imię" :error="!!errors.firstName" :error-message="errors.firstName" />
        </div>
        <div class="col-12 md:col-6">
          <q-input filled v-model="form.lastName" label="Nazwisko" :error="!!errors.lastName" :error-message="errors.lastName" />
        </div>
      </div>
      <div class="row q-col-gutter-md">
        <div class="col-12 md:col-6">
          <q-select filled v-model="form.gender" label="Płeć" :options="['Kobieta','Mężczyzna','Inna']" :error="!!errors.gender" :error-message="errors.gender" />
        </div>
        <div class="col-12 md:col-6">
          <q-input filled v-model.number="form.age" label="Wiek" type="number" :error="!!errors.age" :error-message="errors.age" />
        </div>
      </div>
      <q-btn label="Submit" type="submit" color="primary" class="full-width" />
    </q-form>
  </q-card>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({ firstName: '', lastName: '', gender: '', age: null })
const errors = reactive({})

const validate = () => {
  errors.firstName = form.firstName ? '' : 'Required'
  errors.lastName = form.lastName ? '' : 'Required'
  errors.gender = form.gender ? '' : 'Required'
  errors.age = form.age && form.age > 0 ? '' : 'Invalid age'
  return !errors.firstName && !errors.lastName && !errors.gender && !errors.age
}

const handleSubmit = () => { if(validate()) alert(JSON.stringify(form, null, 2)) }
</script>

<style scoped>
.my-card { max-width: 500px; margin: 1rem auto; }
</style>
