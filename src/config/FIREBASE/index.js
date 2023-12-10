import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
  apiKey: "AIzaSyAfcEOIrSTVj0x2AdDGjddttt35Xr6_j4o",
  authDomain: "noteapp-6b1ff.firebaseapp.com",
  projectId: "noteapp-6b1ff",
  storageBucket: "noteapp-6b1ff.appspot.com",
  messagingSenderId: "76931265605",
  appId: "1:76931265605:web:d337653f21a7d38b391f2c"
});

const FIREBASE = firebase;

export default FIREBASE;
