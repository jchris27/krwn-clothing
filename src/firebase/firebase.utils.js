import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyA1fTouhwqkVnRT-dTpyfjdvr_YcX4gfdI',
  authDomain: 'krwn-db-bc74d.firebaseapp.com',
  databaseURL: 'https://krwn-db-bc74d.firebaseio.com',
  projectId: 'krwn-db-bc74d',
  storageBucket: 'krwn-db-bc74d.appspot.com',
  messagingSenderId: '466903072452',
  appId: '1:466903072452:web:f4c332e6e24987f33f9391',
  measurementId: 'G-33FDFGJD47',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//   Google Authentication
const provider = new firebase.auth.GoogleAuthProvider();
//   Always trigger google pop up for authentication.
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
