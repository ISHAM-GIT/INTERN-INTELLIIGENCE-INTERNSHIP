import{createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {addDoc, collection, getFirestore} from "firebase/firestore";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { toast } from "react-toastify";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbrsnE30uelHwvg35iDzkFj2HNFPhIwEs",
  authDomain: "netflix-clone-985cf.firebaseapp.com",
  projectId: "netflix-clone-985cf",
  storageBucket: "netflix-clone-985cf.firebasestorage.app",
  messagingSenderId: "593239886753",
  appId: "1:593239886753:web:94c7cc62b41dc0ad5b59e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app);
const db=getFirestore(app);

const signup =async(name,email,password)=>{

    try {
        const res=await createUserWithEmailAndPassword(auth,email,password);
        const user= res.user;
        await addDoc(collection(db,"user"),{
            uid: user.uid,
            name,
            authProvide:"local",
            email,

        });
    } catch (error) {
        console.log(error);
        // alert(error);
        toast.error(error.code.split('/')[1].split('-').join(" "))
        
    }}
    
    const login= async(email,password)=>{
        try {
            await signInWithEmailAndPassword(auth,email,password);
        } catch (error) {
            console.log(error);
            toast.error(error.code.split('/')[1].split('-').join(" "))
            // alert(error);
            
        }
    }
const logout=()=>{
    signOut(auth)
}
export{auth,db,login,signup,logout};