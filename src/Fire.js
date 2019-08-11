import * as firebase from "firebase";

export const firebaseConfig = {
  apiKey: "AIzaSyD7OeNI5QtlvBr1ieyUQBLnaCU_cskfHUc",
  authDomain: "tychtrzech-app-a56e7.firebaseapp.com",
  databaseURL: "https://tychtrzech-app-a56e7.firebaseio.com",
  projectId: "tychtrzech-app-a56e7",
  storageBucket: "tychtrzech-app-a56e7.appspot.com",
  messagingSenderId: "563364536173",
  appId: "1:563364536173:web:927c948385ded213"
};
firebase.initializeApp(firebaseConfig);

console.log(firebase.storage().ref())
export const database = firebase.database();