<template>
  <div class="card p-5 shadow-2 border-round-lg max-w-3xl mx-auto">
    <h2 class="text-2xl font-semibold mb-4 text-primary text-center">Dynamic Form</h2>

    <form @submit.prevent="handleSubmit" class="flex flex-column gap-4">
      <div class="field">
        <label class="font-medium mb-2 block">Imię i nazwisko</label>
        <InputText v-model="form.name" placeholder="Wpisz imię i nazwisko" class="w-full" />
      </div>

      <h3 class="mt-4 mb-2 text-lg font-medium">Adresy</h3>
      <div
        v-for="(address, index) in form.addresses"
        :key="index"
        class="border-round-md border-1 surface-border p-3 mb-3"
      >
        <div class="grid gap-3">
          <div class="col-12 md:col-6">
            <label class="font-medium mb-2 block">Miasto</label>
            <InputText v-model="address.city" placeholder="Miasto" class="w-full" />
          </div>
          <div class="col-12 md:col-6">
            <label class="font-medium mb-2 block">Ulica</label>
            <InputText v-model="address.street" placeholder="Ulica" class="w-full" />
          </div>
        </div>

        <div class="flex justify-content-end mt-2">
          <Button
            v-if="form.addresses.length > 1"
            label="Usuń"
            icon="pi pi-trash"
            severity="danger"
            outlined
            @click="removeAddress(index)"
          />
        </div>
      </div>

      <div class="flex gap-3">
        <Button
          label="Dodaj adres"
          icon="pi pi-plus"
          outlined
          class="p-button-success"
          @click="addAddress"
          type="button"
        />
        <Button label="Zapisz" icon="pi pi-check" type="submit" class="p-button-success" />
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'

const form = ref({
  name: '',
  addresses: [{ city: '', street: '' }],
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

<style scoped>
.max-w-3xl {
  max-width: 700px;
}
.mx-auto {
  margin-left: auto;
  margin-right: auto;
}
</style>
