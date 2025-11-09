<template>
  <Card class="fancy-card">
    <template #content>
      <h3>Fancy Card</h3>
      <p>
        This card uses gradients and hover effects to look more stylish.  
        Add a short description or highlight special content here.
      </p>
    </template>
  </Card>
</template>

<style scoped>
.fancy-card {
  width: 320px;
  margin: 2em auto;
  border-radius: 16px;
  text-align: center;
  padding: 2em;
  color: white;
  background: linear-gradient(135deg, #42b883, #2a9d8f);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s, box-shadow 0.3s;
}

.fancy-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.25);
}

h3 {
  font-size: 1.3rem;
  margin-bottom: 0.6em;
}

p {
  font-size: 0.95rem;
  opacity: 0.9;
  line-height: 1.4;
}
</style>
