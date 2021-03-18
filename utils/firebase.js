import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCs3EoqM9namXnmt2Lx091R2iahbfpI8fk",
    authDomain: "shop-27f18.firebaseapp.com",
    projectId: "shop-27f18",
    storageBucket: "shop-27f18.appspot.com",
    messagingSenderId: "545195568113",
    appId: "1:545195568113:web:c21f35af2308f796fe3250",
    measurementId: "G-R8F09ZTHHJ"
};

export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();