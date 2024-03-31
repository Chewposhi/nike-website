import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from '../pages/Home.vue'
import ProductsView from '../pages/Products.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/products', component: ProductsView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router