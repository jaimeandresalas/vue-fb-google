const firebase = require("firebase/app");
require("firebase/auth");
require("firebase/firestore");
require("firebase/storage");



const firebaseConfig = {
  apiKey: "AIzaSyBtQXO73JqlH1yT3vwL0TH5UC2HIvxXSsU",
  authDomain: "fb-4fa15.firebaseapp.com",
  databaseURL: "https://fb-4fa15.firebaseio.com",
  projectId: "fb-4fa15",
  storageBucket: "fb-4fa15.appspot.com",
  messagingSenderId: "197575325851",
  appId: "1:197575325851:web:9579908326fc3005426e3e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export{
  firebase,
  db,
  auth,
  storage
}