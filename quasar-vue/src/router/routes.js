const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'lists', name: 'Lists', component: () => import('pages/ListsPage.vue') },
      { path: 'forms', name: 'Forms', component: () => import('pages/FormsPage.vue') },
      { path: 'tables', name: 'Tables', component: () => import('pages/TablesPage.vue') },
      { path: 'cards', name: 'Cards', component: () => import('pages/CardsPage.vue')},
      { path: 'navbars', name: 'Navbars', component: () => import('pages/NavbarsPage.vue') },
      { path: 'dashboard', name: 'Dashboard', component: () => import('pages/ChartsDashboard.vue')}
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
  
]

export default routes
