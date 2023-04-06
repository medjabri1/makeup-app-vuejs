import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAajnxV5Q0f6Ug5ckiCI-D-ZXsNjU1jAEo",
    authDomain: "makeup-website-vuejs.firebaseapp.com",
    projectId: "makeup-website-vuejs",
    storageBucket: "makeup-website-vuejs.appspot.com",
    messagingSenderId: "1019672004703",
    appId: "1:1019672004703:web:fe96a01b1372da2c4e33ea",
    measurementId: "G-530HY1YFXS"
};
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//initialize firebase auth
const auth = getAuth();

export { app, auth };