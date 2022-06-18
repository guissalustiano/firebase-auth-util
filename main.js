import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from "firebase/auth";


var config = {
  apiKey: "",
  authDomain: "",
};

initializeApp(config);

var email = "test@test.com";
var password = "test123";

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  console.log(user)
  if (user) {
    updateProfile(auth.currentUser, {
      displayName: "Teste teste"
    })
    document.getElementById("message").innerHTML = "Welcome, " + user.email;
  } else {
    document.getElementById("message").innerHTML = "No user signed in.";
  }
});

signInWithEmailAndPassword(auth, email, password)
  .catch((error) => {
    document.getElementById("message").innerHTML = error.message;
  });
