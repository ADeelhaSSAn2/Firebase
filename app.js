import { auth, createUserWithEmailAndPassword } from "./firebase.js";


const register =()=>{
const email = document.getElementById("email");
const password = document.getElementById("password");
console.log(email.value , password.value)

    // createUserWithEmailAndPassword(auth, "email", "password")
    // .then((userCredential) => {
    //   // Signed up 
    //   const user = userCredential.user;
    //   // ...
    // })
    // .catch((error) => {
    //   const errorCode = error.code;
    //   const errorMessage = error.message;
    //   // ..
    // });

}


const registerBtn = document.getElementById("registerBtn");
registerBtn.addEventListener("click", register)