import CartService from '@/Services/CartService';
import ProductService from '@/Services/ProductService';
import UserService from '@/Services/UserService';
import Vue from 'vue'
import Vuex from 'vuex'

import {
    signOut 
} from "firebase/auth";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

import { auth } from "@/firebaseConfig";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        products: [],
        cart: [],
        user: {
            loggedIn: false,
            data: {}
        },
        signedIn: false
    },
    getters: {
        products: (state) => state.products,
        cart: (state) => state.cart,
        user: (state) => state.user,
        signedIn: (state) => state.signedIn,
    },
    mutations: {

        // PRODUCT 
        SET_PRODUCTS(state, products) {
            state.products = products;
        },

        // CART
        SET_CART(state, cart) {
            state.cart = cart;
        },
        REMOVE_CART_ITEM(state, id) {
            state.cart = state.cart.filter((item) => item.id != id);
        },
        UPDATE_CART_ITEM(state, item) {
            state.cart = state.cart.map((cart__item) => {
                if (cart__item.id == item.id) {
                    return item;
                } else {
                    return cart__item;
                }
            });
        },

        // USER
        SET_USER(state, user) {
            state.user = user;
        },

        SET_SIGNED_IN(state, signedIn) {
            state.signedIn = signedIn;
        }
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

        logState({ commit}) {
            
            auth.onAuthStateChanged(
                (user) => {
                    commit('SET_USER', { loggedIn: true, data: user })
                },
                (error) => {
                    console.log(error);
                }
            )
            
        },

        logOut({ commit }) {

            signOut(auth)
                .then(() => {
                    commit('SET_USER', { loggedIn: false, data: {} });
                })
                .catch(() => {
                    console.log('Error logging out');
                })
        }

    },
    modules: {
    }
})
