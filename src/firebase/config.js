import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyCM5XcJYoaZw55qBPaKUqGlN_bhnGd8lJw",
  authDomain: "olxproject-59cb4.firebaseapp.com",
  projectId: "olxproject-59cb4",
  storageBucket: "olxproject-59cb4.appspot.com",
  messagingSenderId: "43001417454",
  appId: "1:43001417454:web:38ff57b8fe4d3c1baeadff",
  measurementId: "G-ZTVSLDKTXL"
};

  
   export default firebase.initializeApp(firebaseConfig)