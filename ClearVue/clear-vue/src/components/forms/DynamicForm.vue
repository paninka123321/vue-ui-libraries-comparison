<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  addresses: [{ city: '', street: '' }]
})

const addAddress = () => {
  form.value.addresses.push({ city: '', street: '' })
}

const removeAddress = (index) => {
  form.value.addresses.splice(index, 1)
}

const handleSubmit = () => {
  alert('Dane wysłane:\n' + JSON.stringify(form.value, null, 2))
}
</script>

<template>
  <div class="form-container">
    <h2>Adresy użytkownika</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label>Imię i nazwisko</label>
        <input v-model="form.name" type="text" />
      </div>

      <h3>Adresy</h3>
      <div v-for="(address, index) in form.addresses" :key="index" class="address-block">
        <div class="row">
          <div class="form-group">
            <label>Miasto</label>
            <input v-model="address.city" type="text" />
          </div>
          <div class="form-group">
            <label>Ulica</label>
            <input v-model="address.street" type="text" />
          </div>
        </div>
        <button type="button" @click="removeAddress(index)" v-if="form.addresses.length > 1">
          Usuń
        </button>
      </div>

      <button type="button" @click="addAddress">+ Dodaj adres</button>
      <button type="submit">Zapisz</button>
    </form>
  </div>
</template>

<style scoped>
.form-container {
  max-width: 600px;
  margin: 2em auto;
  padding: 1.5em;
  border: 1px solid #ccc;
  border-radius: 8px;
}
.row {
  display: flex;
  gap: 1em;
}
.address-block {
  margin-bottom: 1em;
  border-bottom: 1px solid #eee;
  padding-bottom: 1em;
}
button {
  margin-top: 0.5em;
  margin-right: 0.5em;
  background: #42b883;
  color: white;
  border: none;
  padding: 0.5em 1em;
  border-radius: 4px;
}
button:hover {
  background: #369870;
}
</style>
