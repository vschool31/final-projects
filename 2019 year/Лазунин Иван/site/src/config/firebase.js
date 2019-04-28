import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const config = {
    apiKey: "ask_wibbn:)",
    authDomain: "mathplus-0.firebaseapp.com",
    databaseURL: "https://mathplus-0.firebaseio.com",
    projectId: "mathplus-0",
    storageBucket: "mathplus-0.appspot.com",
    messagingSenderId: "251112830655"
};
firebase.initializeApp(config);

export default firebase;