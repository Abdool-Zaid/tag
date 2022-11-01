import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyB4fllWlEXq3V65cROku0TrTpODhE4GN-4",
    authDomain: "azttag-cb366.firebaseapp.com",
    projectId: "azttag-cb366",
    storageBucket: "azttag-cb366.appspot.com",
    messagingSenderId: "206529704443",
    appId: "1:206529704443:web:30d1a13934f83ebff25b5e"
  };
  firebase.initializeApp(firebaseConfig)
 const projestAuth=firebase.auth()
  const projectFirestore= firebase.firestore()
  const timestamp = firebase.firestore.FieldValue.serverTimestamp
  export{
    projestAuth, projectFirestore,timestamp
  }