import { apiClient } from "./axiosConfig";

import axios from "axios";

export default {
    // getProducts(query= '') {
    //     if(query == '')
    //         return apiClient.get("/products");
    //     else 
    //         return apiClient.get("/products?q="+query);
    // },
    getProducts() {
        return axios.get("https://makeup-website-vuejs-default-rtdb.firebaseio.com/products.json");
    }
};
