// This is where all the configuration goes for Firebase.
// In addition, Firebase itself will be instantiated in this file.
import firebase from 'firebase';
import 'firebase/auth/dist/index.cjs';
import 'firebase/firestore/dist/index.cjs';

const config = {
    apiKey: "AIzaSyCXMweQ_N-5pMoomq5svIeDAR2mkAGdjxM",
    authDomain: "nub-ping-app.firebaseapp.com",
    databaseURL: "https://nub-ping-app.firebaseio.com",
    projectId: "nub-ping-app",
    storageBucket: "nub-ping-app.appspot.com",
    messagingSenderId: "257339309835"
  };

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const auth = firebase.auth();
const firestore = firebase.firestore();
const settings = {/* your settings... */ timestampsInSnapshots: true};
firestore.settings(settings);
const storage = firebase.storage();


export {
  auth,
  firebase,
  firestore,
  storage
};