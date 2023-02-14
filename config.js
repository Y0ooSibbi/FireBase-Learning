const firebase = require('firebase');
const firebaseConfig = {
  apiKey: "AIzaSyDdXux2TzdEFmov56zanzYGGqw1hqDfpyk",
  authDomain: "tutorial-b385d.firebaseapp.com",
  projectId: "tutorial-b385d",
  storageBucket: "tutorial-b385d.appspot.com",
  messagingSenderId: "722349462399",
  appId: "1:722349462399:web:4beb3144f57a75e557404a",
  measurementId: "G-EY0WQFEJE3"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const user = db.collection("Users");
module.exports = user;
