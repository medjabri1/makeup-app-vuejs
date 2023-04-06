import axios from "axios";
import { apiClient } from "./axiosConfig";

import { auth, app } from "@/firebaseConfig.js"
import { collection, doc, setDoc, addDoc, deleteDoc, getDocs, query, getFirestore, where } from "firebase/firestore";

const db = getFirestore();

export default {

    async getCartItems(user_id) {
        let cart = [];
        const querySnap = await getDocs(query(collection(db, "cart"), where("user_id", "==", user_id)));
        querySnap.forEach((doc) => {
            let item = { ...doc.data(), id: doc.id}
            cart.push(item);
        });
        return cart;
    },

    async addToCart(item) {
        return await addDoc(collection(db, "cart"), item);
    },

    async updateCartItem(item) {
        return await setDoc(doc(db, "cart", item.id), item);
    },

    async removeFromCart(item) {
        return await deleteDoc(doc(db, "cart", item.id));
    },
};
