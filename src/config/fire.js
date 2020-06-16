import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDfKpNsXvLYEQZeLOgbvR2uFZDuE_c5AJI",
  authDomain: "react-datacode.firebaseapp.com",
  databaseURL: "https://react-datacode.firebaseio.com",
  projectId: "react-datacode",
  storageBucket: "react-datacode.appspot.com",
  messagingSenderId: "937497317922",
  appId: "1:937497317922:web:14caa234aee8a8a030b07b",
  measurementId: "G-NY8W7M6EZE",
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default fire;
