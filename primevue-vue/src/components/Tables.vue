<template>
  <p>Basic table (PrimeVue)</p>
  <DataTable :value="users" tableStyle="min-width: 20rem">
    <Column field="name" header="Imię" />
    <Column field="age" header="Wiek" />
  </DataTable>

  <p>Expanded table (PrimeVue)</p>

  <DataTable
    :value="wydzialyData"
    dataKey="id"
    v-model:expandedRows="expandedRows"
    tableStyle="min-width: 30rem"
  >
    <Column expander style="width: 3rem" />
    <Column field="nazwa" header="Wydział" />

    <template #expansion="slotProps">
      <ul class="ml-4 list-disc">
        <li v-for="k in slotProps.data.kierunki" :key="k.id">
          {{ k.nazwa }}
        </li>
      </ul>
    </template>
  </DataTable>

  <p>Filtered table (PrimeVue)</p>

  <div class="flex gap-3 mb-3">
    <InputText v-model="search" placeholder="Search by name..." />
    <Dropdown
      v-model="selectedWydzial"
      :options="wydzialyFilterOptions"
      optionLabel="nazwa"
      optionValue="id"
      placeholder="Wybierz wydział"
      showClear
    />
  </div>

  <DataTable :value="filteredStudents" tableStyle="min-width: 30rem">
    <Column field="name" header="Name" />
    <Column field="wydzial" header="Wydział" />
    <Column field="kierunek" header="Kierunek" />
    <template #empty>Brak wyników</template>
  </DataTable>

<p>Filtered table 2 (PrimeVue)</p>

<div class="flex gap-3 mb-3">
  <InputText
    v-model="searchMulti"
    placeholder="Szukaj po imieniu lub nazwisku..."
  />
  <MultiSelect
    v-model="selectedWydzialMulti"
    :options="wydzialyFilterOptionsWithAll"
    optionLabel="nazwa"
    optionValue="id"
    placeholder="Wybierz wydziały"
    display="chip"
    showClear
    filter
    @change="onMultiSelectChange"
  >
    <template #option="slotProps">
      <div>
        <strong v-if="slotProps.option.id === 'ALL'">{{ slotProps.option.nazwa }}</strong>
        <span v-else>{{ slotProps.option.nazwa }}</span>
      </div>
    </template>
  </MultiSelect>
</div>

<DataTable :value="filteredStudentsMulti" tableStyle="min-width: 30rem">
  <Column field="name" header="Name" />
  <Column field="wydzial" header="Wydział" />
  <Column field="kierunek" header="Kierunek" />
  <template #empty>Brak wyników</template>
</DataTable>


</template>






<script setup>
import { ref, computed } from 'vue'

// PrimeVue komponenty
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Dropdown from 'primevue/dropdown'
import MultiSelect from 'primevue/multiselect'

/* dane do basic table */
const users = [
  { id: 1, name: 'Jan', age: 30 },
  { id: 2, name: 'Ola', age: 25 },
  { id: 3, name: 'Piotr', age: 40 }
]

/* wydziały */
const wydzialy = {
  1: { id: 1, nazwa: 'Wydział Informatyki' },
  2: { id: 2, nazwa: 'Wydział Matematyki' },
  3: { id: 3, nazwa: 'Wydział Fizyki' }
}

/* kierunki */
const kierunki = {
  1: { id: 1, nazwa: 'Informatyka', wydzialId: 1 },
  2: { id: 2, nazwa: 'Cyberbezpieczeństwo', wydzialId: 1 },
  3: { id: 3, nazwa: 'Sztuczna inteligencja', wydzialId: 1 },
  4: { id: 4, nazwa: 'Matematyka stosowana', wydzialId: 2 },
  5: { id: 5, nazwa: 'Analiza danych', wydzialId: 2 },
  6: { id: 6, nazwa: 'Fizyka teoretyczna', wydzialId: 3 },
  7: { id: 7, nazwa: 'Astrofizyka', wydzialId: 3 }
}

/* studenci */
const students = ref([
  { id: 1, name: 'Anna Kowalska', wydzialId: 1, kierunekId: 3 },
  { id: 2, name: 'Jan Nowak', wydzialId: 1, kierunekId: 2 },
  { id: 3, name: 'Maria Wiśniewska', wydzialId: 2, kierunekId: 5 },
  { id: 4, name: 'Piotr Lewandowski', wydzialId: 3, kierunekId: 7 },
  { id: 5, name: 'Kasia Zielińska', wydzialId: 2, kierunekId: 4 }
])

const expandedRows = ref([])
/* expanded table */
const wydzialyData = computed(() =>
  Object.values(wydzialy).map(w => ({
    ...w,
    kierunki: Object.values(kierunki).filter(k => k.wydzialId === w.id)
  }))
)

const expanded = ref([])
const toggleRow = id => {
  expanded.value = expanded.value.includes(id)
    ? expanded.value.filter(x => x !== id)
    : [...expanded.value, id]
}

/* filter dla tabeli 1 */
const search = ref('')
const selectedWydzial = ref('')
const wydzialyFilterOptions = computed(() => Object.values(wydzialy))

const filteredStudents = computed(() =>
  students.value
    .filter(s => {
      const matchName = s.name.toLowerCase().includes(search.value.toLowerCase())
      const matchWydzial =
        selectedWydzial.value === '' ||
        s.wydzialId === Number(selectedWydzial.value)
      return matchName && matchWydzial
    })
    .map(s => ({
      ...s,
      wydzial: wydzialy[s.wydzialId].nazwa,
      kierunek: kierunki[s.kierunekId].nazwa
    }))
)

/* filter dla tabeli 2 (multi-select) */
const searchMulti = ref('')
const selectedWydzialMulti = ref([])

// dodajemy specjalny wpis "ALL" na początku
const wydzialyFilterOptionsWithAll = computed(() => [
  { id: 'ALL', nazwa: 'Wszystkie' },
  ...Object.values(wydzialy)
])

// obsługa wyboru z MultiSelect
const onMultiSelectChange = () => {
  if (selectedWydzialMulti.value.includes('ALL')) {
    // jeśli kliknięto "Wszystkie" → ustaw wszystkie wydziały
    selectedWydzialMulti.value = Object.values(wydzialy).map(w => w.id)
  }
}

const filteredStudentsMulti = computed(() => {
  // jeśli pusto → pokazuj wszystkich
  const selected = selectedWydzialMulti.value
  const searchTerm = searchMulti.value.toLowerCase()

  return students.value
    .filter(s => {
      const matchName = s.name.toLowerCase().includes(searchTerm)
      const matchWydzial =
        selected.length === 0 || selected.includes(s.wydzialId)
      return matchName && matchWydzial
    })
    .map(s => ({
      ...s,
      wydzial: wydzialy[s.wydzialId].nazwa,
      kierunek: kierunki[s.kierunekId].nazwa
    }))
})


</script>

<style scoped>
p {
  margin-top: 2rem;
  font-weight: bold;
}
.flex {
  display: flex;
  align-items: center;
}
.gap-3 {
  gap: 1rem;
}
.mb-3 {
  margin-bottom: 1rem;
}
.ml-4 {
  margin-left: 1rem;
}
</style>