import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAsrDXf0l_ZhfhxpSsk5mgN6z77pl0Gtsk",
  authDomain: "vuex-firebase-auth-5f392.firebaseapp.com",
  projectId: "vuex-firebase-auth-5f392",
  storageBucket: "vuex-firebase-auth-5f392.appspot.com",
  messagingSenderId: "334200854731",
  appId: "1:334200854731:web:84ac6da73f835c12f1234e"
}

// initialise firebase
initializeApp(firebaseConfig)

// initialise firebase auth
const auth = getAuth()

export {
  auth
}