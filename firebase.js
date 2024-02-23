// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDFQTdUhvHiNEXqg6OSTpAzfxfylR0eyOM',
  authDomain: 'fir-crud-next-firebase.firebaseapp.com',
  projectId: 'fir-crud-next-firebase',
  storageBucket: 'fir-crud-next-firebase.appspot.com',
  messagingSenderId: '207066621785',
  appId: '1:207066621785:web:810b745c1ab9242b1dce48',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const db = getFirestore()
