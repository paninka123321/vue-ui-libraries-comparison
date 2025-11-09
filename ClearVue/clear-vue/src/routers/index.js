import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Tables from '../components/Tables.vue';
import Cards from '../components/cards/CardsPage.vue';
import ListsPage from '../components/lists/ListsPage.vue';
import navbar from '../components/navbars/NavbarsPage.vue';
import Forms from '../components/forms/FormsPage.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/tables', name: 'Tables', component: Tables },
  { path: '/cards', name: 'Cards', component: Cards },
  { path: '/lists', name: 'Lists', component: ListsPage },
  { path: '/navbar', name: 'Navbar', component: navbar },
  {path:  '/forms', name: 'Forms', component: Forms},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
