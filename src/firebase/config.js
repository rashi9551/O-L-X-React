import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDArxLQbW2hhUP_m_Ulrlqsto5OrGrmc5k",
  authDomain: "olx-react-8e8c3.firebaseapp.com",
  projectId: "olx-react-8e8c3",
  storageBucket: "olx-react-8e8c3.appspot.com",
  messagingSenderId: "810317241520",
  appId: "1:810317241520:web:6121521e7cfa95ea7a6f75",
  measurementId: "G-7B010S2041"
};

  const firebase= initializeApp(firebaseConfig);


export { firebase };