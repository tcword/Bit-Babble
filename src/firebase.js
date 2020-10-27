import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCIe3WdeiEicqvX47WIiKW7UbxKtj3zGaI",
  authDomain: "bit-babble.firebaseapp.com",
  databaseURL: "https://bit-babble.firebaseio.com",
  projectId: "bit-babble",
  storageBucket: "bit-babble.appspot.com",
  messagingSenderId: "939265949119",
  appId: "1:939265949119:web:917b173cb69b83ffddb50a",
  measurementId: "G-7JG5PC8DQN",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;
