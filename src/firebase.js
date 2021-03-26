import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyABzryuPYuIH4TBFUELt09LVuV7ZMSRYPk",
    authDomain: "clone-c3e9a.firebaseapp.com",
    projectId: "clone-c3e9a",
    storageBucket: "clone-c3e9a.appspot.com",
    messagingSenderId: "564334211298",
    appId: "1:564334211298:web:cdd7729af2ad68f1216ebb",
    measurementId: "G-Q6DZ30T4SC"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };