
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
  import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBYOEq2lk27Rbp4FCMQzeci7jfUoXkYHLU",
    authDomain: "eduhelpforum-29636.firebaseapp.com",
    projectId: "eduhelpforum-29636",
    storageBucket: "eduhelpforum-29636.appspot.com",
    messagingSenderId: "210638093598",
    appId: "1:210638093598:web:c6461aac1081d1da865d0f",
    measurementId: "G-603LM1LDXD"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app)
  const auth = getAuth(); 
  //new sign up

  document.querySelector(".signup-btn").addEventListener("click", () =>{
    var email = document.querySelector("#signup-email").value;
    var password =document.querySelector("#signup-password").value;
    //for new sign up
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
    console.log(user);
    alert("signedup")
    window.location.href="Homepage.html"
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    console.log(errorMessage);
    alert(error)
  });

  })
  //sign in
  document.querySelector(".signin-btn").addEventListener("click", () =>{
    var email = document.querySelector("#signin-email").value;
    var password = document.querySelector("#signin-password").value;
    //for signin
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    //alert(user.email+ "signed in!")
    document.querySelector("#signin-email").innerText=""
    window.location.href="Homepage.html"
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
  });

  })