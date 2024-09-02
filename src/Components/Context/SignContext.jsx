import { createContext, useEffect, useState } from "react";




export let SignContext = createContext();

export default function SignContextProvider (props){

    const [signData , setSignData] = useState();
    useEffect(()=>{
        if(localStorage.getItem('userToken')){
            setSignData(localStorage.getItem('userToken'))
        }
    } , [])

    return(
    <SignContext.Provider value={{signData , setSignData}}> 

        {props.children}

    </SignContext.Provider>
)}