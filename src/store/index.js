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

        ADD_TO_CART(state, item) {
            // state.cart = { ...state.cart, item };
            state.cart.push(item);
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
        fetchCartItems({ commit }, user) {

            CartService.getCartItems(user.uid)
                .then((res) => {
                    commit("SET_CART", res);
                    // console.log(res);
                })
                .catch((error) => {
                    console.log(error);
                })
        },

        addToCart({ commit }, item) {
                
            CartService.addToCart(item)
                .then((res) => {
                    commit("ADD_TO_CART", item);
                })
                .catch((error) => {
                    console.log(error);
                })

        },
        
        removeItemFromCart({ commit }, item) {
            CartService.removeFromCart(item)
                .then((res) => {
                    commit("REMOVE_CART_ITEM", item.id);
                })
                .catch((err) => {
                    console.log(err);
                })
        },

        updateCartItem({ commit }, item) {
            // console.log(item.id);
            CartService.updateCartItem(item)
                .then((res) => {
                    commit("UPDATE_CART_ITEM", item);
                })
                .catch((err) => {
                    console.log(err);
                })
        },


        // USERS ACTIONS

        logState({ commit}) {
            
            auth.onAuthStateChanged(
                (user) => {
                    if(user) {
                        commit('SET_USER', { loggedIn: true, data: user })
                    } else {
                        commit('SET_USER', { loggedIn: false, data: {} })
                    }
                },
                (error) => {
                    console.log(error);
                    console.log('User not logged in');
                }
            )
            
        },

        logOut({ commit }) {

            signOut(auth)
                .then(() => {
                    commit('SET_USER', { loggedIn: false, data: {} });
                    console.log()
                })
                .catch(() => {
                    console.log('Error logging out');
                })
        },

    },
    modules: {
    }
})
