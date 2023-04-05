import CartService from '@/Services/CartService';
import ProductService from '@/Services/ProductService';
import UserService from '@/Services/UserService';
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        products: [],
        cart: [],
        users: [],
        user: {},
    },
    getters: {
        products: (state) => state.products,
        cart: (state) => state.cart,
        users: (state) => state.users,
        user: (state) => state.user,
    },
    mutations: {
        SET_PRODUCTS(state, products) {
            state.products = products;
        },
        SET_CART(state, cart) {
            state.cart = cart;
        },
        SET_USER(state, user) {
            state.user = user;
        },
        SET_USERS(state, users) {
            state.users = users;
        },
        REMOVE_CART_ITEM(state, id) {
            state.cart = state.cart.filter((item) => item.id != id);
        },
        UPDATE_CART_ITEM(state, item) {
            state.cart = state.cart.map((cart__item) => {
                if(cart__item.id == item.id) {
                    return item;
                } else {
                    return cart__item;
                }
            });
        },
    },
    actions: {
        // PRODUCT ACTIONS
        fetchProducts({ commit }, searchQuery) {

            ProductService.getProducts(searchQuery)
                .then((response) => {
                    commit("SET_PRODUCTS", response.data);
                })
                .catch((error) => {
                    console.error(error.message);
                });
        },

        // CART ACTIONS
        fetchCartItems({ commit }) {

            CartService.getCartItems()
                .then((response) => {
                    commit("SET_CART", response.data);
                })
                .catch((error) => {
                    console.error(error.message);
                });
        },
        removeItemFromCart({ commit }, id) {
            commit("REMOVE_CART_ITEM", id);
        },
        updateCartItem({ commit }, item) {
            commit("UPDATE_CART_ITEM", item);
        },


        // USERS ACTIONS
        fetchUsers({ commit }) {

            UserService.getUsers()
                .then((response) => {
                    commit("SET_USERS", response.data);
                })
                .catch((error) => {
                    console.error(error.message);
                });
        },

        setUser({ commit}, user) {
            commit("SET_USER", user);
        }
    },
    modules: {
    }
})
