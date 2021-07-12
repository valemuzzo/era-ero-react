import firebase from 'firebase/app';
import  '@firebase/firestore';

  const app = firebase.initializeApp({
    //reemplazar datos de Firebase de Era Ero
    apiKey: "AIzaSyDsrh2NUSZlxzP-Skw1KXyysy2fs41RfLM",
    authDomain: "eraero-27a0e.firebaseapp.com",
    projectId: "eraero-27a0e",
    storageBucket: "eraero-27a0e.appspot.com",
    messagingSenderId: "971040871288",
    appId: "1:971040871288:web:2eee7b5e650d34f1f5ee8d",
    measurementId: "G-C05G7CZTWX"
  });

  export function getFirebase(){
      return app;
  }

  export function getFirestore(){
      return firebase.firestore(app);
  }