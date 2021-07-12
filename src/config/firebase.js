import firebase from "firebase/app";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA_UYmf6B9orhCvmA4HTWhb_UAxRKEkGok",
    authDomain: "weforeverteam-d3cd4.firebaseapp.com",
    projectId: "weforeverteam-d3cd4",
    storageBucket: "weforeverteam-d3cd4.appspot.com",
    messagingSenderId: "11294804167",
    appId: "1:11294804167:web:1c30a9eef357868fe516e2",
    measurementId: "G-312HN82Q4S"
  };

firebase.initializeApp(firebaseConfig)
firebase.firestore()
export default firebase

  
