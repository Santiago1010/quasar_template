import { createRouter, createWebHistory } from 'vue-router';

// import MainLayout from '../layouts/MainLayout.vue';

import NotFound from '../pages/errors/NotFound.vue';

const routes = [
  // {
  //   path: '/',
  //   component: MainLayout,
  // },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFound,
  },
  {
    path: '/:pathMatch(.*)',
    name: 'bad-not-found',
    component: NotFound,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

// router.beforeEach((to, from, next) => {
//   const lang = to.params.lang || 'en';
//   const actual = localStorage.getItem('language');

//   localStorage.setItem('language', lang);

//   if (actual !== lang) {
//     setTimeout(() => {
//       window.location.reload();
//     }, 500);
//   }

//   next();
// });

router.resolve({
  name: 'not-found',
  params: { pathMatch: ['not', 'found'] },
}).href;

export default router;
