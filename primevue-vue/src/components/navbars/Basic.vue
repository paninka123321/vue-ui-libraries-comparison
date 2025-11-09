<script setup>
import { useRoute } from 'vue-router'


const route = useRoute()

const items = [
    { label: 'Home', to: '/' },
    { label: 'Tables', to: '/tables' },
    { label: 'Forms', to: '/forms' },
    { label: 'Login', to: '/login' },
]
</script>



<style scoped>
.basic-navbar {
  background-color: #42b883;
}

.basic-navbar .p-menuitem-link {
  color: white !important;
  font-weight: bold;
}

.basic-navbar .p-menuitem-link.p-menuitem-active {
  text-decoration: underline;
}
</style>
