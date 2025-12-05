// Firebase v9 compat（import不要、scriptタグだけでOK）
const firebaseConfig = {
    apiKey: "AIzaSyDQgoIA89QHmZACPK3B3Z2TknM9KJSBtJE",
    authDomain: "core-f52a0.firebaseapp.com",
    projectId: "core-f52a0",
    storageBucket: "core-f52a0.firebasestorage.app",
    messagingSenderId: "626624327146",
    appId: "1:626624327146:web:308147a91fe86359629693",
    measurementId: "G-ZZ6XPM74BL",
};

// 初期化（v9 compat）
firebase.initializeApp(firebaseConfig);

// Firestore を使えるようにする
const db = firebase.firestore();
