import axios from "axios";
import { apiClient } from "./axiosConfig";

export default {
    getCartItems() {
        return apiClient.get("/cart");
    },
    addItemToCart(item) {
        return apiClient.post("/cart", item);
    },
    deleteItemFromCart(id) {
        return apiClient.delete("/cart/"+id);
    },
    updateItem(item) {
        return apiClient.put("/cart/"+item.id, item);
    },
};
