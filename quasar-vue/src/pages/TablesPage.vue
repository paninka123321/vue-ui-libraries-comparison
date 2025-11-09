<template>
  <q-page padding>

    <!-- Basic table -->
    <div class="q-mb-xl">
      <div class="text-h6 q-mb-sm">Basic Table</div>
      <q-table
        :rows="users"
        :columns="basicColumns"
        row-key="id"
        flat
        bordered
        dense
      />
    </div>

    <!-- Expanded table -->
    <div class="q-mb-xl">
      <div class="text-h6 q-mb-sm">Expanded Table</div>
      <q-table
        :rows="wydzialyData"
        :columns="expandedColumns"
        row-key="id"
        v-model:expanded="expanded"
        flat
        bordered
        dense
      >
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td auto-width>
              <q-btn
                flat
                dense
                round
                :icon="expanded.includes(props.row.id) ? 'expand_less' : 'expand_more'"
                @click="toggleRow(props.row.id)"
              />
            </q-td>
            <q-td v-for="col in expandedColumns.slice(1)" :key="col.name">
              {{ props.row[col.field] }}
            </q-td>
          </q-tr>

          <q-tr v-if="expanded.includes(props.row.id)">
            <q-td colspan="2">
              <ul class="q-ml-md">
                <li v-for="k in props.row.kierunki" :key="k.id">{{ k.nazwa }}</li>
              </ul>
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </div>

    <!-- Filtered table -->
    <div class="q-mb-xl">
      <div class="text-h6 q-mb-sm">Filtered Table</div>
      <div class="q-gutter-sm row items-center">
        <q-input filled v-model="search" label="Search by name..." dense />
        <q-select
          filled
          v-model="selectedWydzial"
          :options="wydzialyFilterOptions"
          option-label="nazwa"
          option-value="id"
          label="Select Wydział"
          clearable
          dense
          emit-value
          map-options
        />
      </div>

      <q-table
        :rows="filteredStudents"
        :columns="studentColumns"
        row-key="id"
        flat
        bordered
        dense
        no-data-label="Brak wyników"
      />
    </div>

    <!-- Filtered table 2 (multi-select) -->
    <div>
      <div class="text-h6 q-mb-sm">Filtered Table 2 (Multi-select)</div>
      <div class="q-gutter-sm row items-center">
        <q-input filled v-model="searchMulti" label="Search by name..." dense />
        <q-select
          filled
          v-model="selectedWydzialMulti"
          :options="wydzialyFilterOptionsWithAll"
          option-label="nazwa"
          option-value="id"
          label="Select Wydziały"
          multiple
          use-chips
          clearable
          dense
          emit-value
          map-options
        />
      </div>

      <q-table
        :rows="filteredStudentsMulti"
        :columns="studentColumns"
        row-key="id"
        flat
        bordered
        dense
        no-data-label="Brak wyników"
      />
    </div>

  </q-page>
</template>

<script setup>
import { ref, computed } from 'vue'

/* Basic table */
const users = [
  { id: 1, name: 'Jan', age: 30 },
  { id: 2, name: 'Ola', age: 25 },
  { id: 3, name: 'Piotr', age: 40 }
]
const basicColumns = [
  { name: 'name', label: 'Imię', field: 'name' },
  { name: 'age', label: 'Wiek', field: 'age' }
]

/* Wydziały and Kierunki */
const wydzialy = {
  1: { id: 1, nazwa: 'Wydział Informatyki' },
  2: { id: 2, nazwa: 'Wydział Matematyki' },
  3: { id: 3, nazwa: 'Wydział Fizyki' }
}
const kierunki = {
  1: { id: 1, nazwa: 'Informatyka', wydzialId: 1 },
  2: { id: 2, nazwa: 'Cyberbezpieczeństwo', wydzialId: 1 },
  3: { id: 3, nazwa: 'Sztuczna inteligencja', wydzialId: 1 },
  4: { id: 4, nazwa: 'Matematyka stosowana', wydzialId: 2 },
  5: { id: 5, nazwa: 'Analiza danych', wydzialId: 2 },
  6: { id: 6, nazwa: 'Fizyka teoretyczna', wydzialId: 3 },
  7: { id: 7, nazwa: 'Astrofizyka', wydzialId: 3 }
}

/* Students */
const students = ref([
  { id: 1, name: 'Anna Kowalska', wydzialId: 1, kierunekId: 3 },
  { id: 2, name: 'Jan Nowak', wydzialId: 1, kierunekId: 2 },
  { id: 3, name: 'Maria Wiśniewska', wydzialId: 2, kierunekId: 5 },
  { id: 4, name: 'Piotr Lewandowski', wydzialId: 3, kierunekId: 7 },
  { id: 5, name: 'Kasia Zielińska', wydzialId: 2, kierunekId: 4 }
])

/* Expanded table */
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
const expandedColumns = [
  { name: 'expander', label: '', field: 'expander' },
  { name: 'nazwa', label: 'Wydział', field: 'nazwa' }
]

/* Filtered table (single select) */
const search = ref('')
const selectedWydzial = ref(null)
const wydzialyFilterOptions = computed(() => Object.values(wydzialy))
const studentColumns = [
  { name: 'name', label: 'Name', field: 'name' },
  { name: 'wydzial', label: 'Wydział', field: 'wydzial' },
  { name: 'kierunek', label: 'Kierunek', field: 'kierunek' }
]
const filteredStudents = computed(() =>
  students.value
    .filter(s => {
      const matchName = s.name.toLowerCase().includes(search.value.toLowerCase())
      const matchWydzial = !selectedWydzial.value || s.wydzialId === selectedWydzial.value
      return matchName && matchWydzial
    })
    .map(s => ({
      ...s,
      wydzial: wydzialy[s.wydzialId].nazwa,
      kierunek: kierunki[s.kierunekId].nazwa
    }))
)

/* Filtered table 2 (multi-select) */
const searchMulti = ref('')
const selectedWydzialMulti = ref([])
const wydzialyFilterOptionsWithAll = computed(() => [
  { id: 'ALL', nazwa: 'Wszystkie' },
  ...Object.values(wydzialy)
])
const filteredStudentsMulti = computed(() => {
  const selected = selectedWydzialMulti.value
  const activeFilter =
    selected.includes('ALL') ? Object.values(wydzialy).map(w => w.id) : selected
  const searchTerm = searchMulti.value.toLowerCase()
  return students.value
    .filter(s => {
      const matchName = s.name.toLowerCase().includes(searchTerm)
      const matchWydzial = activeFilter.length === 0 || activeFilter.includes(s.wydzialId)
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
.q-mb-xl { margin-bottom: 2rem; }
.q-ml-md { margin-left: 1rem; }
</style>
