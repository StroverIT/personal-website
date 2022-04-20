import firebase from "firebase/app"
import { getAnalytics } from "firebase/analytics";
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyDQx5kG0EKDtkZv0OfCUK0eT1qENRRU2Gw",
    authDomain: "portfolio-4b591.firebaseapp.com",
    projectId: "portfolio-4b591",
    storageBucket: "portfolio-4b591.appspot.com",
    messagingSenderId: "1048605734673",
    appId: "1:1048605734673:web:49025ab4c0f6585385beb0",
    measurementId: "G-JGLHTMBDQZ"
}

if(!firebase.apps.length){
    const app = firebase.initializeApp(firebaseConfig)
    const analytics = getAnalytics(app)
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()
export const storage = firebase.storage()