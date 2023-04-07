import axios from "axios";
import { apiClient } from "./axiosConfig";

import { auth, app } from "@/firebaseConfig.js"
import { collection, doc, setDoc, addDoc, deleteDoc, getDocs, query, getFirestore, where } from "firebase/firestore";

const db = getFirestore();

export default {

    async getProductReviews(product_id) {
        let reviews = [];
        const querySnap = await getDocs(query(collection(db, "reviews"), where("product_id", "==", product_id)));
        querySnap.forEach((doc) => {
            let item = { ...doc.data(), id: doc.id}
            reviews.push(item);
        });
        return reviews;
    },

    async addReview(item) {
        return await addDoc(collection(db, "reviews"), item);
    },
};
