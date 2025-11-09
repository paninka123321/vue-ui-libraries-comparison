<template>

    <h2>Market Share</h2>
    <div style="height:350px; width:100%">
      <Chart
        type="pie"
        :data="pieData"
        :options="basicOptions"
        :height="350"
        :width="500"
      />
    </div>

</template>

<script setup>
import Chart from 'primevue/chart'
import Card from 'primevue/card'

const pieData = {
  labels: ['Product A', 'Product B', 'Product C'],
  datasets: [{ data: [300, 50, 100], backgroundColor: ['#42A5F5', '#66BB6A', '#FFA726'] }]
}

const basicOptions = { responsive: true, maintainAspectRatio: false }
</script>
