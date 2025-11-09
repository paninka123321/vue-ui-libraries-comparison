<template>

    <h2>Basic Line Chart</h2>
    <div style="height:450px; width:100%">
      <Chart
        type="line"
        :data="lineData"
        :options="lineOptions"
      />
    </div>

</template>

<script setup>
import Chart from 'primevue/chart'
import Card from 'primevue/card'

// Line chart data
const lineData = {
  labels: ['Q1', 'Q2', 'Q3', 'Q4'],
  datasets: [
    {
      label: 'Sales',
      data: [65, 59, 80, 81],
      borderColor: '#42A5F5',   // Line color
      backgroundColor: '#42A5F5', // Points color
      fill: false,               // No area fill
      tension: 0.4,              // Curved lines
      pointBackgroundColor: '#42A5F5',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#42A5F5'
    }
  ]
}

// Chart options
const lineOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { position: 'top' },
    title: { display: true, text: 'Quarterly Sales - Line Chart' }
  },
  scales: {
    y: { beginAtZero: true }
  }
}
</script>
