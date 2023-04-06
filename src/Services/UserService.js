import { apiClient } from "./axiosConfig";

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    getAuth, 
    setPersistence, 
    browserSessionPersistence,
    localSessionPersistence
} from "firebase/auth";

import "firebase/compat/auth";
import "firebase/compat/firestore";

import { auth, app } from "@/firebaseConfig";

export default {
    register(user) {
        return createUserWithEmailAndPassword(auth, user.email, user.password);
    },

    login(user) {
        // return setPersistence(auth, browserSessionPersistence).then(() => {
            return signInWithEmailAndPassword(auth, user.email, user.password);
        // })
    },
};
