import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BrowseView from '../views/BrowseView.vue'
import DetailsView from '../views/DetailsView.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeView,
		meta: { title: 'Gleaming - Home' }
	},
	{
		path: '/browse',
		name: 'browse',
		component: BrowseView,
		meta: { title: 'Gleaming - Browse' }
	},
	{
		path: '/details/:id',
		name: 'Details',
		component: DetailsView,
		meta: { title: 'Gleaming - Details' }
	},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

router.beforeEach((to, from, next) => {
	const title = to.meta.title;
	if(title) {
		document.title = title;
	}
	next();
})

export default router
