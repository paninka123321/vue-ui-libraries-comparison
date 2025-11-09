<template>
  <v-container>
    <!-- Basic table -->
    <h3>Basic table</h3>
    <v-data-table :items="users" :headers="headers"></v-data-table>
   

    <v-divider class="my-6" />

    <!-- Expanded table -->
    <h3>Expanded table</h3>
    <v-table>
      <thead>
        <tr>
          <th>Wydział</th>
          <th>Akcja</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="wydzial in wydzialyData" :key="wydzial.id">
          <tr>
            <td>{{ wydzial.nazwa }}</td>
            <td>
              <v-btn
                size="small"
                color="success"
                @click="toggleRow(wydzial.id)"
              >
                {{ expanded.includes(wydzial.id) ? 'Zwiń' : 'Rozwiń' }}
              </v-btn>
            </td>
          </tr>
          <tr v-if="expanded.includes(wydzial.id)">
            <td colspan="2" class="bg-grey-darken-3 text-white">
              <v-list density="compact">
                <v-list-item
                  v-for="k in wydzial.kierunki"
                  :key="k.id"
                  :title="k.nazwa"
                />
              </v-list>
            </td>
          </tr>
        </template>
      </tbody>
    </v-table>

    <v-divider class="my-6" />

    <!-- Filtered table -->
    <h3>Filtered table</h3>
    <v-row class="mb-4" align="center">
      <v-col cols="12" md="6">
        <v-text-field
          v-model="search"
          label="Search by name..."
          clearable
          dense
        />
      </v-col>
      <v-col cols="12" md="6">
        <v-select
          v-model="selectedWydzial"
          :items="wydzialyFilterOptions"
          item-title="nazwa"
          item-value="id"
          label="Wydział"
          clearable
          dense
        />
      </v-col>
    </v-row>
    <v-table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Wydział</th>
          <th>Kierunek</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="student in filteredStudents" :key="student.id">
          <td>{{ student.name }}</td>
          <td>{{ student.wydzial }}</td>
          <td>{{ student.kierunek }}</td>
        </tr>
        <tr v-if="filteredStudents.length === 0">
          <td colspan="3">No results found</td>
        </tr>
      </tbody>
    </v-table>

    <v-divider class="my-6" />

    <!-- Filtered table 2 (multi-select + search) -->
    <h3>Filtered table 2 (dropdown multi-select + search)</h3>
    <v-row class="mb-4" align="center">
      <v-col cols="12" md="6">
        <v-text-field
          v-model="searchMulti"
          label="Szukaj po imieniu lub nazwisku..."
          clearable
          dense
        />
      </v-col>
      <v-col cols="12" md="6">
        <v-select
          v-model="selectedWydzialMulti"
          :items="wydzialyMultiOptions"
          item-title="nazwa"
          item-value="id"
          label="Wydziały (multi-select)"
          multiple
          clearable
          dense
          @update:modelValue="onMultiSelectChange"
        />
      </v-col>
    </v-row>
    <div class="mb-2 text-caption">
      Wybrane: {{ selectedWydzialText }}
    </div>
    <v-table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Wydział</th>
          <th>Kierunek</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="student in filteredStudentsMulti" :key="student.id">
          <td>{{ student.name }}</td>
          <td>{{ student.wydzial }}</td>
          <td>{{ student.kierunek }}</td>
        </tr>
        <tr v-if="filteredStudentsMulti.length === 0">
          <td colspan="3">No results found</td>
        </tr>
      </tbody>
    </v-table>
  </v-container>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useScrollStrategies } from 'vuetify/lib/components/VOverlay/scrollStrategies.mjs'

const users = [
  { id: 1, name: 'Jan', age: 30 },
  { id: 2, name: 'Ola', age: 25 },
  { id: 3, name: 'Piotr', age: 40 }
]
const headers = [
  { title: 'First Name', value: 'name' },
  { title: 'Age', key: 'age' },
]

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

const students = ref([
  { id: 1, name: 'Anna Kowalska', wydzialId: 1, kierunekId: 3 },
  { id: 2, name: 'Jan Nowak', wydzialId: 1, kierunekId: 2 },
  { id: 3, name: 'Maria Wiśniewska', wydzialId: 2, kierunekId: 5 },
  { id: 4, name: 'Piotr Lewandowski', wydzialId: 3, kierunekId: 7 },
  { id: 5, name: 'Kasia Zielińska', wydzialId: 2, kierunekId: 4 }
])

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

const search = ref('')
const selectedWydzial = ref(null)
const wydzialyFilterOptions = computed(() => Object.values(wydzialy))

const filteredStudents = computed(() =>
  students.value
    .filter(s => {
      const matchName = s.name.toLowerCase().includes(search.value.toLowerCase())
      const matchWydzial =
        !selectedWydzial.value ||
        s.wydzialId === Number(selectedWydzial.value)
      return matchName && matchWydzial
    })
    .map(s => ({
      ...s,
      wydzial: wydzialy[s.wydzialId].nazwa,
      kierunek: kierunki[s.kierunekId].nazwa
    }))
)

// Multi-select wydziały z opcją "Wszystkie"
const searchMulti = ref('')
const selectedWydzialMulti = ref([])

// dodajemy opcję "Wszystkie" na początku
const wydzialyMultiOptions = computed(() => [
  { id: 'ALL', nazwa: 'Wszystkie' },
  ...Object.values(wydzialy)
])

const onMultiSelectChange = (value) => {
  if (value.includes('ALL')) {
    // jeśli wybrano "Wszystkie", wybierz wszystkie wydziały
    selectedWydzialMulti.value = Object.values(wydzialy).map(w => w.id)
  } else {
    selectedWydzialMulti.value = value
  }
}

const selectedWydzialText = computed(() => {
  if (!selectedWydzialMulti.value.length) return 'Wszystkie'
  const names = selectedWydzialMulti.value.map(id => wydzialy[id]?.nazwa)
  return names.filter(Boolean).join(', ')
})

const filteredStudentsMulti = computed(() =>
  students.value
    .filter(s => {
      const matchName = s.name.toLowerCase().includes(searchMulti.value.toLowerCase())
      const matchWydzial =
        !selectedWydzialMulti.value.length ||
        selectedWydzialMulti.value.includes(s.wydzialId)
      return matchName && matchWydzial
    })
    .map(s => ({
      ...s,
      wydzial: wydzialy[s.wydzialId].nazwa,
      kierunek: kierunki[s.kierunekId].nazwa
    }))
)
</script>