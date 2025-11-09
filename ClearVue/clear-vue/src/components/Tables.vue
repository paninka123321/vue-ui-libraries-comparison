<template>
  <!-- Basic table -->
  <p>Basic table</p>
  <table border="1" cellpadding="6">
    <thead>
      <tr>
        <th>Imię</th>
        <th>Wiek</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="u in users" :key="u.id">
        <td>{{ u.name }}</td>
        <td>{{ u.age }}</td>
      </tr>
    </tbody>
  </table>

  <br />

  <!-- Expanded table -->
  <p>Expanded table</p>
  <table class="expanded-table">
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
            <button @click="toggleRow(wydzial.id)">
              {{ expanded.includes(wydzial.id) ? 'Zwiń' : 'Rozwiń' }}
            </button>
          </td>
        </tr>
        <tr v-if="expanded.includes(wydzial.id)">
          <td colspan="2" class="expanded-cell">
            <ul>
              <li v-for="k in wydzial.kierunki" :key="k.id">
                {{ k.nazwa }}
              </li>
            </ul>
          </td>
        </tr>
      </template>
    </tbody>
  </table>

  <br />

  <!-- Filtered table -->
  <p>Filtered table</p>
  <div class="filters">
    <input
      type="text"
      v-model="search"
      placeholder="Search by name..."
    />
    <select v-model="selectedWydzial">
      <option value="">All wydziały</option>
      <option
        v-for="w in wydzialyFilterOptions"
        :key="w.id"
        :value="w.id"
      >
        {{ w.nazwa }}
      </option>
    </select>
  </div>

  <table class="filtered-table">
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
  </table>

  <br />

  <!-- Filtered table 2 -->
<p>Filtered table 2 (dropdown multi-select + search)</p>

<div class="filters">
  <input
    type="text"
    v-model="searchMulti"
    placeholder="Szukaj po imieniu lub nazwisku..."
  />

  <!-- Custom dropdown -->
  <div class="dropdown" @click.stop="toggleDropdown">
    <div class="dropdown-label">
      {{ selectedWydzialText || 'Wybierz wydziały' }}
      <span class="arrow">{{ dropdownOpen ? '▲' : '▼' }}</span>
    </div>
    <div v-if="dropdownOpen" class="dropdown-menu" @click.stop>
      <label class="option">
        <input
          type="checkbox"
          value="ALL"
          :checked="selectedWydzialMulti.includes('ALL')"
          @change="toggleAllWydzialy"
        />
        Wszystkie
      </label>
      <label
        class="option"
        v-for="w in wydzialyFilterOptions"
        :key="w.id"
      >
        <input
          type="checkbox"
          :value="String(w.id)"
          :checked="selectedWydzialMulti.includes(String(w.id))"
          @change="() => toggleWydzial(String(w.id))"
        />
        {{ w.nazwa }}
      </label>
    </div>
  </div>
</div>

<p class="selected-text">
  Wybrane: {{ selectedWydzialText }}
</p>

<table class="filtered-table">
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
</table>
</template>

<script setup>
import { ref, computed } from 'vue'

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
const selectedWydzialMulti = ref(['ALL'])
const dropdownOpen = ref(false)

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value
}

// zamykanie dropdowna po kliknięciu poza nim
document.addEventListener('click', () => (dropdownOpen.value = false))

const selectedWydzialText = computed(() => {
  if (selectedWydzialMulti.value.includes('ALL')) return 'Wszystkie'
  const names = selectedWydzialMulti.value.map(id => wydzialy[id]?.nazwa)
  return names.filter(Boolean).join(', ')
})

const toggleWydzial = (id) => {
  if (selectedWydzialMulti.value.includes(id)) {
    selectedWydzialMulti.value = selectedWydzialMulti.value.filter(w => w !== id)
  } else {
    selectedWydzialMulti.value = [
      ...selectedWydzialMulti.value.filter(w => w !== 'ALL'),
      id
    ]
  }

  if (selectedWydzialMulti.value.length === 0) {
    selectedWydzialMulti.value = ['ALL']
  }
}

const toggleAllWydzialy = () => {
  if (selectedWydzialMulti.value.includes('ALL')) {
    selectedWydzialMulti.value = []
  } else {
    selectedWydzialMulti.value = ['ALL']
  }
}

const filteredStudentsMulti = computed(() =>
  students.value
    .filter(s => {
      const matchName = s.name.toLowerCase().includes(searchMulti.value.toLowerCase())
      const matchWydzial =
        selectedWydzialMulti.value.includes('ALL') ||
        selectedWydzialMulti.value.includes(String(s.wydzialId))
      return matchName && matchWydzial
    })
    .map(s => ({
      ...s,
      wydzial: wydzialy[s.wydzialId].nazwa,
      kierunek: kierunki[s.kierunekId].nazwa
    }))
)

</script>

<style scoped>
.expanded-table {
  width: 100%;
  border-collapse: collapse;
}
.expanded-table th,
.expanded-table td {
  border: 1px solid #ccc;
  padding: 8px;
}
.expanded-cell {
  background: #2c2c2c;
  color: white;
}
button {
  padding: 0.3em 0.6em;
  border: none;
  background: #42b883;
  color: white;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background: #369870;
}
.filters {
  margin-bottom: 1em;
  display: flex;
  gap: 1em;
}
input,
select {
  padding: 0.4em 0.6em;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.filtered-table {
  width: 100%;
  border-collapse: collapse;
}
.filtered-table th,
.filtered-table td {
  border: 1px solid #ddd;
  padding: 8px;
}
.multi-select {
  width: 250px;
  min-height: 120px;
}
.selected-text {
  margin-top: 0.5em;
  font-style: italic;
}
.dropdown {
  position: relative;
  width: 250px;
  cursor: pointer;
  user-select: none;
}

.dropdown-label {
  padding: 0.4em 0.6em;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: #2a2a2a;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.dropdown-menu {
  position: absolute;
  top: 105%;
  left: 0;
  width: 100%;
  background: #333;
  border: 1px solid #666;
  border-radius: 6px;
  padding: 0.5em;
  z-index: 100;
  max-height: 220px;
  overflow-y: auto;
}

.option {
  display: flex;
  align-items: center;
  gap: 0.5em;
  padding: 0.3em 0;
  color: white;
}

.option input {
  transform: scale(1.1);
}

.arrow {
  font-size: 0.8em;
  opacity: 0.7;
}

</style>
