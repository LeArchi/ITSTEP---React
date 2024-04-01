import { createContext, useContext } from "react";
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCTynkJ48MIggflBOD9MrOs454PORI4hc4",
  authDomain: "personal-website-danylo.firebaseapp.com",
  projectId: "personal-website-danylo",
  storageBucket: "personal-website-danylo.appspot.com",
  messagingSenderId: "592620561414",
  appId: "1:592620561414:web:8da6456e06b82bdb1f0f87"
};

const app = firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore()


const AppContext = createContext()

export const useAppContext = ()=>{    
    return useContext(AppContext)
}

export const AppProvider = ({children}) =>{    
    return (<AppContext.Provider value={{firebase, firestore}}>{children}</AppContext.Provider>)
}