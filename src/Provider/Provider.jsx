import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../FireBase/Firebase.config";



export const AuthContext = createContext(null);
 

const Provider = ({children}) => {

    const [user, setuser] = useState(null);
    console.log(user);
    const [loading, setLoading] = useState(true);
    //register
  
    const Creatuser = (email, passowrd) => {
      setLoading(true)
      return createUserWithEmailAndPassword(auth, email, passowrd);
    }
    // ////// updated 
  
    const updatedUserProfile = (name, image) => {           
      updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: image
      }).then(() => {
                    
      }).catch((error) => {
        console.error(error) 
      });
    }
                                        
    // //////////////////////////////////////////////
    const login = (email, password) => {
      setLoading(true)
      return signInWithEmailAndPassword(auth, email, password)                 
    }
  
    // /////////////////////////////////////////////
    const LogOut = () => {
  
      return signOut(auth)
    }
  
    // Social provider 
    const GoogleProvider = new GoogleAuthProvider();
    const GithubProvider = new GithubAuthProvider();
  
  
    const googleLogin = () => {
      return signInWithPopup(auth, GoogleProvider)
    }
    
   
  
    const GithubLogin = () => {
      return signInWithPopup(auth ,GithubProvider)
    }
  

  
  
    useEffect(() => {
      const Unsubscribe = onAuthStateChanged(auth, (Cuuretusers) => {
  
        setuser(Cuuretusers)
        setLoading(false)
      });
      return () => {
        Unsubscribe()
      }
    },
      [])
  
    const AuthInfo = {
      user,
      loading,
      Creatuser,
      login,
      LogOut,
      googleLogin,
      updatedUserProfile,
      GithubLogin
    
    }




    return (
        <AuthContext.Provider value={AuthInfo}  >

        {children}                           
  
      </AuthContext.Provider>
    );
};

export default Provider;