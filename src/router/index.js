import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/LoginComponent.vue';
import Dashboard from '../components/DashboardComponent.vue';
import CadastroFuncionario from '../components/CadastroFuncionario.vue'
import CadastroProdutos from '../components/CadastroProdutos.vue'
import Venda from '../components/VendaComponent.vue'

const routes = [
  { path: '/', name: 'Login', component: Login },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard, meta: { requiresAuth: true } },
  { path: '/cadastro-funcionario', name: 'CadastroFuncionario', component: CadastroFuncionario, meta: { requiresAuth: true } },
  { path: '/cadastro-produtos', name: 'CadastroProduto', component: CadastroProdutos, meta: { requiresAuth: true } },
  { path: '/venda', name: 'venda', component: Venda, meta: { requiresAuth: true } },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

function usuarioAutenticado() {
  return localStorage.getItem('token') !== null;
}
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !usuarioAutenticado()) {
    next({ name: 'Login' });
  } else {
    next(); 
  }
})

export default router
