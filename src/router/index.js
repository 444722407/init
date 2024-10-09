import { createWebHistory , createRouter } from 'vue-router'

import Home from '@/views/home.vue';
import Mine from '@/views/mine.vue';

const routes = [
  { path: '/', redirect:'/home' },
  { path: '/home', component: Home },
  { path: '/mine', component: Mine },
];

const router = createRouter({
  history: createWebHistory (),
  routes,
})


export default router;