import { apiClient } from "./axiosConfig";

const BIN_ID = '642c3c33ebd26539d0a46517';

export default {
    getProducts(query= '') {
        if(query == '')
            return apiClient.get("/products");
        else 
            return apiClient.get("/products?q="+query);
    },
};
