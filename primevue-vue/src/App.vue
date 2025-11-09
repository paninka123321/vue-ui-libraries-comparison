<template>
  <div>
    <nav class="main-content">
      <router-link to="/">Home</router-link> |
      <router-link to="/tables">Tables</router-link>
      <p></p>
      <router-link to="/navbars">Navbars</router-link> |
      <router-link to="/cards" >Cards</router-link> |
      <router-link to="/lists" > Lists</router-link> 
      <p></p>
      <router-link to="/forms" > Forms</router-link> |
      <router-link to="/chats" > Chats</router-link> |
      <router-link to="/charts/pie">Pie Chart</router-link>
      <p></p>
      <router-link to="/charts/line">Line Chart</router-link> |
      <router-link to="/charts/bar">Bar Chart</router-link>
      <router-link to="/charts/dual">Dual Chart</router-link> | 
      <p></p>
      <router-link to="/charts/filtered">Filtered Chart</router-link>


    </nav>

    <router-view /> <!-- Tutaj wyświetlą się komponenty w zależności od ścieżki -->
  </div>
</template>

<style scoped>
.main-content {
  padding-top: 56px; /* wysokość navbar */
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
