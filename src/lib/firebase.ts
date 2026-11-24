import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, set, child } from "firebase/database";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqywBMA9KkNCwERPtA1qOa5FlbYbRJhjc",
  authDomain: "procedure-db1ec.firebaseapp.com",
  databaseURL: "https://procedure-db1ec-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "procedure-db1ec",
  storageBucket: "procedure-db1ec.firebasestorage.app",
  messagingSenderId: "869835785475",
  appId: "1:869835785475:web:ba8a7bb1a42edef5111536",
  measurementId: "G-G7XSPG13H7"
};
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export { ref, get, set, child };
