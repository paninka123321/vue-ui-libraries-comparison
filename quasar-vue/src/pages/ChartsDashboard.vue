<template>
  <q-page padding class="q-gutter-md">
    <!-- Basic Bar Chart -->
    <q-card>
      <q-card-section>
        <div class="text-h6 q-mb-md">Basic Bar Chart</div>
        <canvas ref="basicChart"></canvas>
      </q-card-section>
    </q-card>

    <!-- Chart with Filter -->
    <q-card>
      <q-card-section>
        <div class="row justify-between items-center q-mb-md">
          <div class="text-h6">Sales by Year</div>
          <q-select
            v-model="selectedYear"
            :options="years"
            dense
            outlined
            option-label="label"
            option-value="value"
          />
        </div>
        <canvas ref="filteredChart"></canvas>
      </q-card-section>
    </q-card>

    <!-- Dual Chart Card -->
    <q-card>
      <q-card-section>
        <div class="row justify-between items-center q-mb-md">
          <div class="text-h6">Performance</div>
          <q-btn-toggle v-model="activeChart" :options="chartOptions" rounded />
        </div>
        <canvas v-if="activeChart === 'Revenue'" ref="revenueChart"></canvas>
        <canvas v-else ref="costChart"></canvas>
      </q-card-section>
    </q-card>

    <!-- Popular Example -->
    <q-card>
      <q-card-section>
        <div class="text-h6 q-mb-md">Market Share</div>
        <canvas ref="pieChart"></canvas>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref, watch, onMounted, nextTick } from 'vue'
import { Chart } from 'chart.js/auto'

const basicChart = ref(null)
const filteredChart = ref(null)
const revenueChart = ref(null)
const costChart = ref(null)
const pieChart = ref(null)

const selectedYear = ref(2023)
const years = [
  { label: '2023', value: 2023 },
  { label: '2024', value: 2024 }
]

const activeChart = ref('Revenue')
const chartOptions = [
  { label: 'Revenue', value: 'Revenue' },
  { label: 'Costs', value: 'Costs' }
]

const salesData = {
  2023: [50, 60, 70, 90],
  2024: [80, 75, 100, 120]
}

let charts = {}

// Utility to safely create/destroy a chart
const createChart = (refEl, type, data, options, chartKey) => {
  if (!refEl) return
  if (charts[chartKey]) charts[chartKey].destroy()
  charts[chartKey] = new Chart(refEl, { type, data, options })
}

// Initialize all charts
const renderCharts = async () => {
  await nextTick() // ensure canvases are in DOM

  createChart(
    basicChart.value,
    'bar',
    { labels: ['Q1', 'Q2', 'Q3', 'Q4'], datasets: [{ label: 'Sales', data: [65, 59, 80, 81], backgroundColor: '#42A5F5' }] },
    { responsive: true, maintainAspectRatio: false },
    'basic'
  )

  createChart(
    filteredChart.value,
    'line',
    { labels: ['Q1', 'Q2', 'Q3', 'Q4'], datasets: [{ label: 'Sales', data: salesData[selectedYear.value], borderColor: '#42A5F5', fill: false }] },
    { responsive: true, maintainAspectRatio: false },
    'filtered'
  )

  createChart(
    revenueChart.value,
    'bar',
    { labels: ['Jan', 'Feb', 'Mar', 'Apr'], datasets: [{ label: 'Revenue', data: [120, 100, 140, 180], backgroundColor: '#66BB6A' }] },
    { responsive: true, maintainAspectRatio: false },
    'revenue'
  )

  createChart(
    costChart.value,
    'line',
    { labels: ['Jan', 'Feb', 'Mar', 'Apr'], datasets: [{ label: 'Costs', data: [60, 80, 70, 90], borderColor: '#EF5350', fill: false }] },
    { responsive: true, maintainAspectRatio: false },
    'cost'
  )

  createChart(
    pieChart.value,
    'pie',
    { labels: ['Product A', 'Product B', 'Product C'], datasets: [{ data: [300, 50, 100], backgroundColor: ['#42A5F5', '#66BB6A', '#FFA726'] }] },
    { responsive: true, maintainAspectRatio: false },
    'pie'
  )
}

// Watch for year change in filtered chart
watch(selectedYear, (newYear) => {
  if (charts.filtered) {
    charts.filtered.data.datasets[0].data = salesData[newYear]
    charts.filtered.update()
  }
})

// Watch active chart toggle for dual chart
watch(activeChart, async () => {
  await nextTick()
  if (charts.revenue) charts.revenue.update()
  if (charts.cost) charts.cost.update()
})

onMounted(renderCharts)
</script>
