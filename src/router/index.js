import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/LoginComponent.vue';
import Dashboard from '../components/DashboardComponent.vue';
import CadastroFuncionario from '../components/CadastroFuncionario.vue'
import CadastroProdutos from '../components/CadastroProdutos.vue'
import Venda from '../components/VendaComponent.vue'

const routes = [
  { path: '/', name: 'Login', component: Login },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/cadastro-funcionario', name: 'CadastroFuncionario', component: CadastroFuncionario },
  { path: '/cadastro-produtos', name: 'CadastroProduto', component: CadastroProdutos },
  { path: '/venda', name: 'venda', component: Venda },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
