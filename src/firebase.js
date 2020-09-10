import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA9d9fLv7WJJQhuTRaFWwOeQvqOYoDsU8w",
  authDomain: "clone-d6437.firebaseapp.com",
  databaseURL: "https://clone-d6437.firebaseio.com",
  projectId: "clone-d6437",
  storageBucket: "clone-d6437.appspot.com",
  messagingSenderId: "121850895372",
  appId: "1:121850895372:web:50314634463407557d2229",
  measurementId: "G-93JR2M2DCY",
};

// initialize the app with firebase congfig
const firebaseApp = firebase.initializeApp(firebaseConfig);

// initialize the firebase database
const db = firebaseApp.firestore();

//initialize auth
const auth = firebase.auth();

export { db, auth };
