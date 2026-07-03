import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyC4a4Vau8t-7weYHCTVLid_oj-lHJvMQ4s",
    authDomain: "mofu-passport.firebaseapp.com",
    projectId: "mofu-passport",
    storageBucket: "mofu-passport.firebasestorage.app",
    messagingSenderId: "503813729457",
    appId: "1:503813729457:web:eb34c7c4224a5c51e34690"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);