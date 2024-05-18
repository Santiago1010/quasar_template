import { createRouter, createWebHistory } from 'vue-router';

import NotFound from '../pages/errors/NotFound.vue';
import mainRoutes from '../routes/main';

const routes = [
	...mainRoutes,
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

router.resolve({
	name: 'not-found',
	params: { pathMatch: ['not', 'found'] },
}).href;

export default router;
