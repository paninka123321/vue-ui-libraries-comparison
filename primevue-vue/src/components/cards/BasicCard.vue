<template>
  <Card class="info-card">
    <template #title>Info Card</template>
    <template #content>
      <p>
        This is a simple information card with some text content.  
        You can use it for tips, notices, or to highlight short bits of info.
      </p>
    </template>
  </Card>
</template>

<style scoped>
.info-card {
  max-width: 320px;
  margin: 2em auto;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  padding: 1.5em;
}

.info-card p {
  color: #444;
  font-size: 0.95rem;
  line-height: 1.5;
}
</style>
