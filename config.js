import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyBeuysjs0SxIGI2zBY1XO_xhiN65BZE9u8",
  authDomain: "bookcenterapp.firebaseapp.com",
  databaseURL: "https://bookcenterapp-default-rtdb.firebaseio.com",
  
  projectId: "bookcenterapp",
  storageBucket: "bookcenterapp.appspot.com",
  messagingSenderId: "511036007933",
  appId: "1:511036007933:web:92874d004353bf7312e594"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
