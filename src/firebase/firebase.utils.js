import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyADLfs1U83SXKbllGxtAEwiOcJSpnv5a80",
    authDomain: "crwn-db-24f67.firebaseapp.com",
    projectId: "crwn-db-24f67",
    storageBucket: "crwn-db-24f67.appspot.com",
    messagingSenderId: "1043009506161",
    appId: "1:1043009506161:web:9d2a870da3f096476944d0",
    measurementId: "G-S0VE9V76SZ"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;