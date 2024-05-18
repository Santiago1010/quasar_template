// -------------------------------- LAYOUTS -------------------------------- //
import MainLayout from '../layouts/MainLayouts.vue';

// --------------------------------- PAGES --------------------------------- //
import MainPage from '../pages/MainPage.vue';

const routes = [
	{
		path: '/',
		component: MainLayout,
		children: [
			{
				path: '/',
				name: 'main',
				component: MainPage,
			},
		],
	},
];

export default routes;
