// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB3gAeWvEX_pjB1fHC4LNusD5jOMz4Bq38",
    authDomain: "farshid-ibtihaj.firebaseapp.com",
    projectId: "farshid-ibtihaj",
    storageBucket: "farshid-ibtihaj.appspot.com",
    messagingSenderId: "557829683621",
    appId: "1:557829683621:web:d08bd97ccb11a4d6c5d04c",
    measurementId: "G-DP9B9C8E4Z"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);