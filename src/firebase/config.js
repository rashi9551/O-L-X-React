import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBLR3DKEXF07Tr9xqujImeBHNqlOkVvHZ8",
    authDomain: "sample-c3457.firebaseapp.com",
    projectId: "sample-c3457",
    storageBucket: "sample-c3457.appspot.com",
    messagingSenderId: "847173180382",
    appId: "1:847173180382:web:9f9030a1b5015c342c5b4f",
    measurementId: "G-T6FVYZBGGE"
  };

  const firebase= initializeApp(firebaseConfig);


export { firebase };