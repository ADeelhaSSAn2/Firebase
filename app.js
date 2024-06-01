import { auth, createUserWithEmailAndPassword } from "./firebase.js";


const register =()=>{
const email = document.getElementById("email");
const password = document.getElementById("password");
// console.log(email.value , password.value)

    createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      // Signed up 
    //   const user = userCredential.user;
    //   console.log("user-->" , user)

      console.log("userCredential" , userCredential)

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

    //   console.log("errorCode-->" , errorCode)
    //   console.log("errorMessage-->" , errorMessage)

    console.log(error)
    });

}


const registerBtn = document.getElementById("registerBtn");
registerBtn.addEventListener("click", register)