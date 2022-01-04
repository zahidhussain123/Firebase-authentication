import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAbxeZ-x5Vy69CgkWt6236JQKMJGZ3bxQM",
  authDomain: "authentication-app-410d6.firebaseapp.com",
  projectId: "authentication-app-410d6",
  storageBucket: "authentication-app-410d6.appspot.com",
  messagingSenderId: "814680329749",
  appId: "1:814680329749:web:70c62c4adc480d7560481c",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
