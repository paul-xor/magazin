import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBSC2AXiEq2GG4DKArWESsWu8RBPfPxXK4",
  authDomain: "magazin-react.firebaseapp.com",
  databaseURL: "https://magazin-react.firebaseio.com",
  projectId: "magazin-react",
  storageBucket: "",
  messagingSenderId: "671393882693",
  appId: "1:671393882693:web:d1a427d50b27dce2"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
