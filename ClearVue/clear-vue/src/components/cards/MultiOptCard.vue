<template>
  <div class="action-card">
    <h3>Newsletter</h3>
    <p>Subscribe to our newsletter to get the latest updates!</p>
    <button>Subscribe</button>
  </div>
</template>

<style scoped>
.action-card {
  max-width: 300px;
  margin: 1em auto;
  padding: 1.5em;
  background-color: grey;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

button {
  margin-top: 1em;
  padding: 0.5em 1em;
  border: none;
  background-color: #ffb74d;
  color: white;
  border-radius: 6px;
  cursor: pointer;
}

button:hover {
  background-color: #ffa726;
}
</style>
