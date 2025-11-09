<template>
  <v-card
    class="mx-auto my-4 fancy-card"
    max-width="320"
    elevation="10"
  >
    <v-card-title class="justify-center">Fancy Card</v-card-title>
    <v-card-text class="text-center">
      <p>This card uses gradients and hover effects to look more stylish.</p>
    </v-card-text>
  </v-card>
</template>

<style scoped>
.fancy-card {
  background: linear-gradient(135deg, #42b883, #2a9d8f);
  color: white;
  transition: transform 0.3s, box-shadow 0.3s;
}
.fancy-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.25);
}
</style>