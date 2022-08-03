import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDkZnWYDosrvQQnhmPA-_t3HsBBUSHY_wQ",
    authDomain: "netflix-clone-e0617.firebaseapp.com",
    projectId: "netflix-clone-e0617",
    storageBucket: "netflix-clone-e0617.appspot.com",
    messagingSenderId: "22025411311",
    appId: "1:22025411311:web:9edf814a54a30282a7191a",
    measurementId: "G-KBGJSR90K8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth }
export default db;