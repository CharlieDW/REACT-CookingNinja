import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBY04Q-66EhTBu-tWBWG1GM7TUdXpoJyMk',
  authDomain: 'cooking-ninja-site-9286b.firebaseapp.com',
  projectId: 'cooking-ninja-site-9286b',
  storageBucket: 'cooking-ninja-site-9286b.appspot.com',
  messagingSenderId: '699817258281',
  appId: '1:699817258281:web:2fc339f448c3d2c9c71b38',
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// initialize services
const projectFirestore = firebase.firestore();

export { projectFirestore };
