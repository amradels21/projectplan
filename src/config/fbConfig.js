import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyBMtGW6VVKleP70QKpkOtZzJrnzDOKmVo0",
    authDomain: "projectplan-react-b2c2b.firebaseapp.com",
    databaseURL: "https://projectplan-react-b2c2b.firebaseio.com",
    projectId: "projectplan-react-b2c2b",
    storageBucket: "projectplan-react-b2c2b.appspot.com",
    messagingSenderId: "677068499759",
    appId: "1:677068499759:web:f6d31b9389393462fd4fda"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({timestampsInSnapshots: true});

export default firebase;