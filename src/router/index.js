import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component:()=> import('@/views/HomeView.vue')
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition; // Foydalanuvchi orqaga qaytsa, avvalgi joyni ko‘rsatadi.
    } else if (to.hash) {
      return {
        el: to.hash, // Hash orqali skroll qiling
        behavior: 'smooth', // Skroll animatsiyasi
      };
    } else {
      return { top: 0 }; // Yangi sahifa ochilganda yuqoridan boshlanadi
    }
  },
});

export default router;
