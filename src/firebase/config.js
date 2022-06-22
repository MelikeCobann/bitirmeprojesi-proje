import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyCucJXVglAG03VVbBww-BlpFhgEJxhFNtM",
  authDomain: "bitirme-projesi-c1a83.firebaseapp.com",
  projectId: "bitirme-projesi-c1a83",
  storageBucket: "bitirme-projesi-c1a83.appspot.com",
  messagingSenderId: "1066253720456",
  appId: "1:1066253720456:web:ba7ab7cca5cfbdc3ad783d",
  measurementId: "G-N262L3SWKX"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const tarih = firebase.firestore.FieldValue.serverTimestamp;
const auth = firebase.auth()


export { db, tarih, auth }

