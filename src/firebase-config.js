// import { initializeApp } from "firebase/app";
// import { getFirestore } from "@firebase/firestore";



// const firebaseConfig = {
//     apiKey: "AIzaSyA0eZQ0rmF4bCgD97INXkTo3OjATd0VhLQ",
//     authDomain: "employee-a263a.firebaseapp.com",
//     projectId: "employee-a263a",
//     storageBucket: "employee-a263a.appspot.com",
//     messagingSenderId: "639116336910",
//     appId: "1:639116336910:web:16ccd1bcee893fd0d6815f"
// };


// const app = initializeApp(firebaseConfig);

// export const db = getFirestore(app);


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDkbSQZY2xX8pH_LTgHrmeivpwpBbG-vj8",
  authDomain: "employee-portal-dbafe.firebaseapp.com",
  projectId: "employee-portal-dbafe",
  storageBucket: "employee-portal-dbafe.appspot.com",
  messagingSenderId: "421867886123",
  appId: "1:421867886123:web:2fccac6725a424d242bc6e",
  measurementId: "G-GFW4CRNVRX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
