<template>
  <q-card class="my-card p-4">
    <div class="text-h6 mb-4">Dynamic Form (Quasar)</div>
    <q-form @submit.prevent="handleSubmit" class="q-gutter-md">
      <q-input filled v-model="form.name" label="Imię i nazwisko" />

      <div v-for="(address, index) in form.addresses" :key="index" class="q-pa-sm q-mb-sm border rounded">
        <div class="row q-col-gutter-md">
          <div class="col-12 md:col-6">
            <q-input filled v-model="address.city" label="Miasto" />
          </div>
          <div class="col-12 md:col-6">
            <q-input filled v-model="address.street" label="Ulica" />
          </div>
        </div>
        <q-btn v-if="form.addresses.length>1" label="Usuń" color="negative" size="sm" flat @click="removeAddress(index)" />
      </div>

      <q-btn label="Dodaj adres" color="secondary" flat @click="addAddress" />
      <q-btn label="Submit" color="primary" type="submit" class="full-width" />
    </q-form>
  </q-card>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({ name: '', addresses: [{ city: '', street: '' }] })

const addAddress = () => form.addresses.push({ city: '', street: '' })
const removeAddress = (index) => form.addresses.splice(index, 1)
const handleSubmit = () => alert(JSON.stringify(form, null, 2))
</script>

<style scoped>
.my-card { max-width: 600px; margin: 1rem auto; }
.border { border: 1px solid #eee; border-radius: 6px; }
</style>
