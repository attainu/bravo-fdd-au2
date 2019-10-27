import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDfQrFTIeR9L8XsZutfUe0XaSTOkfkuE1U",
  authDomain: "music-app-98cae.firebaseapp.com",
  databaseURL: "https://music-app-98cae.firebaseio.com",
  projectId: "music-app-98cae",
  storageBucket: "music-app-98cae.appspot.com",
  messagingSenderId: "409241298853",
  appId: "1:409241298853:web:dae0742dbc8417cf37aa4c",
  measurementId: "G-SVYM2MTWBS"
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({ prompt: "select_account" });
// export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
