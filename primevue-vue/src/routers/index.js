import { createRouter, createWebHistory } from 'vue-router';
import Tables from '../components/Tables.vue';
import HelloWorld from '../components/HelloWorld.vue';
import Navbars from '../components/navbars/Navbars.vue';
import Cards from '../components/cards/Cards.vue';
import Lists from '../components/lists/Lists.vue'
import Forms from '../components/forms/Forms.vue';
import Chats from '../components/chats/Chats.vue';
import BarChart from '../components/charts/BarChart.vue';
import LineChart from '../components/charts/LineChart.vue';
import PieChart from '../components/charts/PieChart.vue';
import DualChart from '../components/charts/DualChart.vue';
import FilteredChart from '../components/charts/FilteredChart.vue';



const routes = [
  { path: '/', name: 'HelloWorld', component: HelloWorld },
  { path: '/tables', name: 'Tables', component: Tables },
  { path: '/navbars', name: 'Navbars', component: Navbars },
  { path: '/login', name: 'Login', component: Navbars },
  { path: '/about', name: 'About', component: Navbars },
  { path: '/contact', name: 'Contact', component: Navbars },
  { path: '/tables/basic', name: 'TablesBasic', component: Navbars },
  { path: '/tables/advanced', name: 'TablesAdvanced', component: Navbars },
  { path: '/cards', name: 'Cards', component: Cards },
  { path: '/lists', name: 'Lists', component: Lists },
  { path: '/forms', name: 'Forms', component: Forms },
  { path: '/chats', name: 'Chats', component: Chats },
  { path: '/charts/bar', name: 'BarChart', component: BarChart },
  { path: '/charts/line', name: 'LineChart', component: LineChart },
  { path: '/charts/pie', name: 'PieChart', component: PieChart },
  { path: '/charts/dual', name: 'DualChart', component: DualChart },
  { path: '/charts/filtered', name: 'FilteredChart', component: FilteredChart },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;