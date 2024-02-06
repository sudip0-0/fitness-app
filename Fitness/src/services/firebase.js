// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import {getFirestore,collection,addDoc, getDocs, query,where} from "firebase/firestore" 
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBn-xzpIso7VOBi_HTYcqpbDqY6uhxFNM0",
  authDomain: "movie-info-e3a40.firebaseapp.com",
  projectId: "movie-info-e3a40",
  storageBucket: "movie-info-e3a40.appspot.com",
  messagingSenderId: "637941083798",
  appId: "1:637941083798:web:ba6114e8261ed7ce7adcb7"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
const db = getFirestore(app)

const registerUser = (email,password) => createUserWithEmailAndPassword(auth,email,password)
const loginUser = (email,password) => signInWithEmailAndPassword(auth,email,password)
const logoutUser =() => signOut(auth)

const addData= (tableName, data) =>addDoc(collection(db,tableName),data)

const getDataWhere = (tableName,column, operator,value) => getDocs(query(collection(db,tableName),where(column,operator,value)))
export {registerUser,loginUser,logoutUser,addData,getDataWhere, auth}

export default app