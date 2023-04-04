import CartService from '@/Services/CartService';
import ProductService from '@/Services/ProductService';
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        products: [],
        cart: [],
        user: {},
    },
    getters: {
        products: (state) => state.products,
        cart: (state) => state.cart,
    },
    mutations: {
        SET_PRODUCTS(state, products) {
            state.products = products;
        },
        SET_CART(state, cart) {
            state.cart = cart;
        },
    },
    actions: {
        fetchProducts({ commit }) {

            ProductService.getProducts()
                .then((response) => {
                    commit("SET_PRODUCTS", response.data);
                })
                .catch((error) => {
                    console.error(error.message);
                });
        },
        fetchCartItems({ commit }) {

            CartService.getCartItems()
                .then((response) => {
                    commit("SET_CART", response.data);
                })
                .catch((error) => {
                    console.error(error.message);
                });
        },
    },
    modules: {
    }
})
