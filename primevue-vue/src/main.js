import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import Button from "primevue/button"
import router from './routers' 
import Menubar from 'primevue/menubar';
import Sidebar from 'primevue/sidebar'
import Card  from 'primevue/card';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Chart from 'primevue/chart';


import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)


const app = createApp(App);
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});

app.use(router)


app.component('Button', Button)
app.component('Menubar', Menubar)
app.component('Sidebar', Sidebar)
app.component('Card', Card)
app.component('InputText', InputText)
app.component('Password', Password)
app.component('Chart', Chart)
app.mount('#app')
