import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBT-rIodKiotY0zOieDif4Qj_pGSrfH7n8",
  authDomain: "apparel-f4dc9.firebaseapp.com",
  projectId: "apparel-f4dc9",
  storageBucket: "apparel-f4dc9.appspot.com",
  messagingSenderId: "784146639848",
  appId: "1:784146639848:web:529ad4e19f9919d144525d"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);