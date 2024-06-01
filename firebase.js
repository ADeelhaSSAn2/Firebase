import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";



// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDi57XLgl-hiJh88-s-aCEFU6daVIQXxa8",
    authDomain: "developer-adeel.firebaseapp.com",
    projectId: "developer-adeel",
    storageBucket: "developer-adeel.appspot.com",
    messagingSenderId: "817195114192",
    appId: "1:817195114192:web:481de3d7d33817ba1988d5"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const auth =  getAuth(app);

  export{
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
  }

