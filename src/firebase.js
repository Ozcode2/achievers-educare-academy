import firebase from "firebase/compat/app"; // Use 'compat' for Firebase v9 or above
import "firebase/compat/firestore"; // Use 'compat' for Firebase v9 or above
import "firebase/compat/auth"; // Use 'compat' for Firebase v9 or above

const firebaseConfig = {
  apiKey: "AIzaSyApEdtiBmUGE0JbIA8Y4fNtYCYt2F6xD2E",
  authDomain: "achievers-educare-academy.firebaseapp.com",
  projectId: "achievers-educare-academy",
  storageBucket: "achievers-educare-academy.appspot.com",
  messagingSenderId: "813675428468",
  appId: "1:813675428468:web:093924dafd2ea53affaf21",
  measurementId: "G-8P06EEE149",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
