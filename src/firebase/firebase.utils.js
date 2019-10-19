import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDovSNjnI_I3cRF-39Pimtca_GPr8ObCNQ",
  authDomain: "melomac-3d4bd.firebaseapp.com",
  databaseURL: "https://melomac-3d4bd.firebaseio.com",
  projectId: "melomac-3d4bd",
  storageBucket: "",
  messagingSenderId: "231651002619",
  appId: "1:231651002619:web:8ebd55035353fbb1cb485e",
  measurementId: "G-L2M12KSTBJ"
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({ prompt: "select_account" });
// export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
