import { createContext, useContext, useEffect, useState } from "react"
import {getAuth, GoogleAuthProvider,signInWithPopup } from "firebase/auth";


const authContext=createContext()
export const useAuth=()=>{
    return useContext(authContext)
}


// eslint-disable-next-line react/prop-types
export function AuthProvider({children}){
    useEffect(()=>{
        const user=JSON.parse(localStorage.getItem('blogUser'))
        setCurrentUser(user)
    },[])
    const [currentUser,setCurrentUser]=useState('')
    const signin=()=>{
        const auth=getAuth()
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth,provider).then((response)=>{
            console.log(response)
            localStorage.setItem('blogUser',JSON.stringify(response))
            localStorage.setItem('blogUserImg',(response.user.photoURL))
            window.location.reload()
        }).catch((error)=>{
            console.log(error.message || error)
        })
    }
    const signout=()=>{
        localStorage.removeItem('blogUser')
        localStorage.removeItem('blogUserImg')
        // window.location.reload()
    }


    return(
        <authContext.Provider value={{signin,signout,currentUser}}>
            {children}
        </authContext.Provider>
    )
}