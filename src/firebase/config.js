import { initializeApp } from "firebase/app"

// Firestore
import { getFirestore, serverTimestamp, collection } from "firebase/firestore"

// Authentication
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAQFHRUjEefVUeX0cR18XH0AYPIbUVz02U",
    authDomain: "live-chat-room-5763a.firebaseapp.com",
    projectId: "live-chat-room-5763a",
    storageBucket: "live-chat-room-5763a.appspot.com",
    messagingSenderId: "1086081225071",
    appId: "1:1086081225071:web:5e171fc21b15a494c3589a"
};

initializeApp(firebaseConfig);

let db = getFirestore();
let auth = getAuth();
let timestamp = serverTimestamp();
let userColRef = collection(db, "users-infomation")

export {
    db,auth,userColRef,timestamp
}