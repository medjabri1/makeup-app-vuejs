import { apiClient } from "./axiosConfig";

import axios from "axios";

import { getDatabase, ref, onValue } from "firebase/database";
const database = getDatabase();

export default {
    getProducts() {
        return axios.get("https://makeup-website-vuejs-default-rtdb.firebaseio.com/products.json");
    },
};
