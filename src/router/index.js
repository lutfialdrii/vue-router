import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
  },
  {
    path: '/portfolio',
    name: '/portfolio',
    component: () => import('../views/PortfolioView.vue'),
  },
  {
    path: '/contact',
    name: '/contact',
    component: () => import('../views/ContactView.vue'),
  },
  {
    path: '/pengalaman',
    name: '/pengalaman',
    component: () => import('../views/PengalamanView.vue'),
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
