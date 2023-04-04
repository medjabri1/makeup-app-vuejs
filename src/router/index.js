import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BrowseView from '../views/BrowseView.vue'
import DetailsView from '../views/DetailsView.vue'
import CartView from '../views/CartView.vue'
import CheckoutView from '../views/CheckoutView.vue'
import OrderConfirmationView from '../views/OrderConfirmationView.vue'
import ProfileView from '../views/ProfileView.vue'
import NotFoundView from '../views/NotFoundView.vue'

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
	{
		path: '/cart',
		name: 'Cart',
		component: CartView,
		meta: { title: 'Gleaming - Cart' }
	},
	{
		path: '/checkout',
		name: 'Checkout',
		component: CheckoutView,
		meta: { title: 'Gleaming - Checkout' }
	},
	{
		path: '/confirmation',
		name: 'Confirmation',
		component: OrderConfirmationView,
		meta: { title: 'Gleaming - Order Confirmation' }
	},
	{
		path: '/profile',
		name: 'Profile',
		component: ProfileView,
		meta: { title: 'Gleaming - Profile' }
	},
	{
		path: '*',
		name: 'NotFound',
		component: NotFoundView,
		meta: { title: 'Gleaming - 404' }
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
