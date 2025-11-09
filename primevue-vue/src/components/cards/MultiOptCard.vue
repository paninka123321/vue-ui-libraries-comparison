<template>
  <Card class="newsletter-card">
    <template #content>
      <h3>Newsletter</h3>
      <p>Subscribe to our newsletter to get the latest updates and articles straight to your inbox!</p>
      <Button label="Subscribe" class="p-button-warning p-mt-2" />
    </template>
  </Card>
</template>

<style scoped>
.newsletter-card {
  width: 320px;
  margin: 2em auto;
  background-color: #fff8e1;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  padding: 1.5em;
}

h3 {
  color: #f57c00;
  margin-bottom: 0.5em;
}

p {
  color: #5d4037;
  margin-bottom: 1em;
  font-size: 0.95rem;
  line-height: 1.4;
}
</style>
