import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCx9UJI7ktgrC-1M-gx3uQNIrPIUUhbgbo",
  authDomain: "solenne-and-grant.firebaseapp.com",
  databaseURL: "https://solenne-and-grant-default-rtdb.firebaseio.com",
  projectId: "solenne-and-grant",
  storageBucket: "solenne-and-grant.firebasestorage.app",
  messagingSenderId: "150856047043",
  appId: "1:150856047043:web:d7eb85974388a671fdc576",
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
