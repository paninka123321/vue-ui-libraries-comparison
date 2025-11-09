<template>
  <!-- Card with buttons -->

    <div class="flex justify-between items-center">
      <h2 style="margin:0">Select Chart</h2>
      <SelectButton v-model="activeChart" :options="chartOptions" />
    </div>


  <!-- Chart container outside the card -->
  <div style="height:450px; width:100%; background-color:#fff; padding:1rem; border-radius:8px; box-shadow:0 2px 8px rgba(0,0,0,0.1);">
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
</template>

<script setup>
import { ref } from 'vue'
import Card from 'primevue/card'
import Chart from 'primevue/chart'
import SelectButton from 'primevue/selectbutton'

const chartOptions = ['Revenue', 'Costs']
const activeChart = ref('Revenue')

const revenueData = {
  labels: ['Jan','Feb','Mar','Apr'],
  datasets: [{ label:'Revenue', backgroundColor:'#66BB6A', data:[120,100,140,180] }]
}

const costData = {
  labels: ['Jan','Feb','Mar','Apr'],
  datasets: [{ label:'Costs', borderColor:'#EF5350', backgroundColor:'#EF5350', fill:false, tension:0.4, data:[60,80,70,90] }]
}

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
</script>
