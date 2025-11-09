<template>
  <!-- Card with chart type selector -->

    <div class="flex justify-between items-center">
      <h2 style="margin:0">Select Chart</h2>
      <SelectButton v-model="activeChart" :options="chartOptions" />
    </div>


  <!-- Revenue/Costs chart -->
  <div
    v-if="activeChart === 'Revenue' || activeChart === 'Costs'"
    style="height:450px; width:100%; background-color:#fff; padding:1rem; border-radius:8px; box-shadow:0 2px 8px rgba(0,0,0,0.1); margin-bottom:1rem;"
  >
    <Chart
      v-if="activeChart === 'Revenue'"
      type="bar"
      :data="revenueData"
      :options="chartOptionsPrime"
      style="height:100%; width:100%"
    />
    <Chart
      v-else
      type="line"
      :data="costData"
      :options="chartOptionsPrime"
      style="height:100%; width:100%"
    />
  </div>

  <!-- Card with year selector for filtered chart -->

    <div class="flex justify-between items-center">
      <h2 style="margin:0">Sales by Year</h2>
      <SelectButton v-model="selectedYear" :options="years" />
    </div>


  <!-- Filtered chart -->
  <div
    style="height:450px; width:100%; background-color:#fff; padding:1rem; border-radius:8px; box-shadow:0 2px 8px rgba(0,0,0,0.1);"
  >
    <Chart
      type="line"
      :data="filteredData"
      :options="chartOptionsPrime"
      style="height:100%; width:100%"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import Card from 'primevue/card'
import Chart from 'primevue/chart'
import SelectButton from 'primevue/selectbutton'

// Chart type toggle
const chartOptions = ['Revenue', 'Costs']
const activeChart = ref('Revenue')

// Revenue / Costs data
const revenueData = {
  labels: ['Jan','Feb','Mar','Apr'],
  datasets: [{ label:'Revenue', backgroundColor:'#66BB6A', data:[120,100,140,180] }]
}

const costData = {
  labels: ['Jan','Feb','Mar','Apr'],
  datasets: [{ label:'Costs', borderColor:'#EF5350', backgroundColor:'#EF5350', fill:false, tension:0.4, data:[60,80,70,90] }]
}

// Chart options for all charts
const chartOptionsPrime = {
  responsive:true,
  maintainAspectRatio:false,
  plugins:{
    legend:{ position:'top', labels:{ color:'#000' } },
    title:{ display:true, text:'Performance Overview', color:'#000' }
  },
  scales:{
    x:{ ticks:{ color:'#000' } },
    y:{ ticks:{ color:'#000' }, beginAtZero:true }
  }
}

// Filtered chart (Sales by Year)
const years = [2023, 2024, 2025]
const selectedYear = ref(2023)
const salesData = {
  2023: [50, 60, 70, 90],
  2024: [80, 75, 100, 120],
  2025: [100, 110, 90, 130]
}

// Computed chart data updates automatically when selectedYear changes
const filteredData = computed(() => ({
  labels: ['Q1','Q2','Q3','Q4'],
  datasets: [{ label:`Sales ${selectedYear.value}`, backgroundColor:'#42A5F5', data: salesData[selectedYear.value] }]
}))
</script>
