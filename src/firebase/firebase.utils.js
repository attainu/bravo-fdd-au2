import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA6yU_z0TO6Qqpj71YQ_hTReBCBIkkRnNc",
    authDomain: "melomac-app.firebaseapp.com",
    databaseURL: "https://melomac-app.firebaseio.com",
    projectId: "melomac-app",
    storageBucket: "melomac-app.appspot.com",
    messagingSenderId: "6267685758",
    appId: "1:6267685758:web:546a0c3ff90b860369812f",
    measurementId: "G-9FTFBCG89R"
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({ prompt: "select_account" });
// export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
