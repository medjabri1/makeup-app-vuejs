import { apiClient } from "./axiosConfig";

const BIN_ID = '642c3c33ebd26539d0a46517';

export default {
    getUsers() {
        return apiClient.get("/users");
    },
    addUser(user) {
        return apiClient.post("/users", user);
    }
};
