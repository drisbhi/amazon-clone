import firebase from "firebase";
//Config
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD52KsTK1udB-XqmoLZRuLTffAbVB8E4i4",
    authDomain: "clone-a807e.firebaseapp.com",
    projectId: "clone-a807e",
    storageBucket: "clone-a807e.appspot.com",
    messagingSenderId: "881002764592",
    appId: "1:881002764592:web:d432bb287adde086b410f5",
    measurementId: "G-D14VGS4D7K"
  });
  const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider };