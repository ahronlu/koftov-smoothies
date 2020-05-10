import firebase from "firebase";
import firestore from "firebase/firestore";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCYz-D3t_pYI19dZ4peFp3CoGp56nIiRpA",
  authDomain: "koftov-smoothies.firebaseapp.com",
  databaseURL: "https://koftov-smoothies.firebaseio.com",
  projectId: "koftov-smoothies",
  storageBucket: "koftov-smoothies.appspot.com",
  messagingSenderId: "96280487838",
  appId: "1:96280487838:web:7a6cd6578b3b094ae6188f"
};
const firebaseApp = firebase.initializeApp(config);

// Export firestore database
export default firebaseApp.firestore();
