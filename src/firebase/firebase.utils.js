import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAVWZyCq-xhKE7Dqsf06nS0omyRMbYGWQY',
  authDomain: 'crwn-db-6a2f0.firebaseapp.com',
  databaseURL: 'https://crwn-db-6a2f0.firebaseio.com',
  projectId: 'crwn-db-6a2f0',
  storageBucket: 'crwn-db-6a2f0.appspot.com',
  messagingSenderId: '439663189354',
  appId: '1:439663189354:web:4568f04260315931cfd913',
  measurementId: 'G-M73DEGD2B6',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
