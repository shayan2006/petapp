//import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBYQeSQnradPwNWw4mc0OAfKDQLy-2SEEo",
    authDomain: "petapp-3ab72.firebaseapp.com",
    projectId: "petapp-3ab72",
    storageBucket: "petapp-3ab72.appspot.com",
    messagingSenderId: "165339510016",
    appId: "1:165339510016:web:4c2e3166135e1fe6c96fe5"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()