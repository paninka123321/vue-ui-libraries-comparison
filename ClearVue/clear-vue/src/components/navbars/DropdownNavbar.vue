<template>
  <nav class="navbar">
    <ul>
      <li><router-link to="/">Home</router-link></li>

      <li class="dropdown">
        <a href="#">Tables ▾</a>
        <ul class="dropdown-menu">
          <li><router-link to="/tables/basic">Basic</router-link></li>
          <li><router-link to="/tables/advanced">Advanced</router-link></li>
        </ul>
      </li>

      <li><router-link to="/forms">Forms</router-link></li>
      <li><router-link to="/login">Login</router-link></li>
    </ul>
  </nav>
</template>

<style scoped>
.navbar {
  background: #42b883;
  padding: 0.8em 1em;
}
ul {
  list-style: none;
  display: flex;
  gap: 1.5rem;
  margin: 0;
  padding: 0;
}
a {
  color: white;
  text-decoration: none;
}
.dropdown {
  position: relative;
}
.dropdown-menu {
  display: none;
  position: absolute;
  background: #333;
  color: #333;
  top: 1.5em;
  left: 0;
  list-style: none;
  padding: 0.5em 0;
  border-radius: 0.3em;
}
.dropdown-menu li {
  padding: 0.3em 1em;
}
.dropdown-menu li:hover {
  background: #42b883;
}
.dropdown:hover .dropdown-menu {
  display: block;
}
</style>
