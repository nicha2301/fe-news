// firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyDg9pJiiBZDWioRjjiJ_fU8rgmyVY2B3_A",
//   authDomain: "frontend-5ea3c.firebaseapp.com",
//   projectId: "frontend-5ea3c",
//   storageBucket: "frontend-5ea3c.appspot.com",
//   messagingSenderId: "878232285483",
//   appId: "1:878232285483:web:afa4730bcc4fa63232956e",
//   measurementId: "G-R07JYRH6Y7"
// };

// const firebaseConfig = {
//   apiKey: "AIzaSyBWfShejeVRRAQNIIiK7ZIoPmwHfBlempw",
//   authDomain: "frontend-5e264.firebaseapp.com",
//   projectId: "frontend-5e264",
//   storageBucket: "frontend-5e264.appspot.com",
//   messagingSenderId: "981413602466",
//   appId: "1:981413602466:web:0f9b8f826074bcc119e3fb",
//   measurementId: "G-S0FP199PG5"
// };

const firebaseConfig = {
  apiKey: "AIzaSyCORLV9n49lMQlhlLnR6WSIrDjtWw0LNdM",
  authDomain: "frontend-a0b83.firebaseapp.com",
  projectId: "frontend-a0b83",
  storageBucket: "frontend-a0b83.appspot.com",
  messagingSenderId: "671013358514",
  appId: "1:671013358514:web:3c0d926860fc37005572ab",
  measurementId: "G-FCMFRLKS57"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export { auth, db };

