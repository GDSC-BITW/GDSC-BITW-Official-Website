import firebase from 'firebase/app';
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAcFgIcyTVNJOGkej1D3Z_iCJK6yBsYI4U",
    authDomain: "gdsc-bitw-867fa.firebaseapp.com",
    projectId: "gdsc-bitw-867fa",
    storageBucket: "gdsc-bitw-867fa.appspot.com",
    messagingSenderId: "303860689484",
    appId: "1:303860689484:web:e7c6e5eebe79bfebc562e9",
    measurementId: "G-PSSSMF6NNN"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;
