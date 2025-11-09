<template>
  <div class="fancy-card">
    <h3>Fancy Card</h3>
    <p>This card uses gradients and hover effects to look more stylish.</p>
  </div>
</template>

<style scoped>
.fancy-card {
  width: 320px;
  margin: 1em auto;
  padding: 2em;
  border-radius: 16px;
  background: linear-gradient(135deg, #42b883, #2a9d8f);
  color: grey;
  text-align: center;
  box-shadow: 0 10px 25px rgba(0,0,0,0.2);
  transition: transform 0.3s, box-shadow 0.3s;
}

.fancy-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.25);
}
</style>
