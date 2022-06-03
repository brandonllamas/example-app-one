import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCyn1Be3nDVMF-Mwl6Sl39ZayiTctuGoEs",
    authDomain: "prueba24-79deb.firebaseapp.com",
    projectId: "prueba24-79deb",
    storageBucket: "prueba24-79deb.appspot.com",
    messagingSenderId: "470387521457",
    appId: "1:470387521457:web:6ac214598401b73d6aef90",
    measurementId: "G-45QHM48RKE"
  };
// Initialize Firebase
var fire = firebase.initializeApp(firebaseConfig);

export { fire };