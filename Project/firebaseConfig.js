import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyC5oeb3IQUMhLE9aZyZxfTaYH1qRLGIGeo',
  authDomain: 'signup-710fa.firebaseapp.com',
  projectId: 'signup-710fa',
  storageBucket: 'signup-710fa.appspot.com',
  messagingSenderId: '502298421170',
  appId: '1:502298421170:web:c02336e4c20fad049d26ab',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const crudPR = getFirestore(app);

export { auth, crudPR};