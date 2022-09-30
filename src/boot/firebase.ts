import { FirebaseOptions, initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = <FirebaseOptions>{
  apiKey: 'AIzaSyC8lg-gZDbW7mWK1fY6BrSdkzgyeT4frXo',
  authDomain: 'court-finder-baad5.firebaseapp.com',
  databaseURL: 'https://court-finder-baad5-default-rtdb.firebaseio.com',
  projectId: 'court-finder-baad5',
  storageBucket: 'court-finder-baad5.appspot.com',
  messagingSenderId: '737343120847',
  appId: '1:737343120847:web:02d5b4e9c0b2fc72b65eba'
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = getAuth()

export { auth, db, onAuthStateChanged }