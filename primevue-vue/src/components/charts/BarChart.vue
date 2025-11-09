<template>

    <h2>Basic Bar Chart</h2>
    <div style="height:450px; width:100%">
      <Chart
        type="bar"
        :data="basicData"
        :options="basicOptions"
      />
    </div>

</template>

<script setup>
import Chart from 'primevue/chart'
import Card from 'primevue/card'

// Bar chart data
const basicData = {
  labels: ['Q1', 'Q2', 'Q3', 'Q4'],
  datasets: [
    {
      label: 'Sales',
      backgroundColor: '#42A5F5',
      data: [65, 59, 80, 81]
    }
  ]
}

// Chart options
const basicOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { position: 'top' },
    title: { display: true, text: 'Quarterly Sales' }
  }
}
</script>
