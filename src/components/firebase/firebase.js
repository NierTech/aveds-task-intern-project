import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth'
import { useEffect, useState } from "react";
const firebaseConfig = {
  apiKey: "AIzaSyDVkv7RevcFdTK3EP0h6r-UO7oaVCsrtY0",
  authDomain: "aveds-task-intern-project.firebaseapp.com",
  projectId: "aveds-task-intern-project",
  storageBucket: "aveds-task-intern-project.appspot.com",
  messagingSenderId: "844748747561",
  appId: "1:844748747561:web:2cbc59ede375020b1ebd38",
  measurementId: "G-J8RZ004QXX"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export function signup (email, password)  {
  return createUserWithEmailAndPassword(auth,email,password);
}
export function logout(){
  return signOut(auth);
}
export function useAuth() {
  const [currentLogin,setCurrentLogin] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, login => setCurrentLogin(login) );
    return unsub;
  },[])
  return currentLogin;
}