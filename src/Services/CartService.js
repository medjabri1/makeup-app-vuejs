import axios from "axios";
import { apiClient } from "./axiosConfig";

export default {
    getCartItems() {
        return apiClient.get("/cart");
    },
    addItemToCart(item) {
        return apiClient.post("/cart", item);
    }
};
