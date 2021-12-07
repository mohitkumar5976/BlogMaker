import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBm0GLfCcamENAkKOHHXzbp9UwjNT-r1Kc",
  authDomain: "blogmaker-c5dda.firebaseapp.com",
  projectId: "blogmaker-c5dda",
  storageBucket: "blogmaker-c5dda.appspot.com",
  messagingSenderId: "512648682922",
  appId: "1:512648682922:web:2d09ebbdcdd253c2a25fd3",
  measurementId: "G-5XYV6DJBVC",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
