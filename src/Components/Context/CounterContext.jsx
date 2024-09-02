import { createContext, useState } from "react";


export let counterContext = createContext(0)

export default function CounterContextProvider(props){

    const [count, setCount] = useState(10);

    function changeCount(){
        setCount(count+1);
    }


    return <counterContext.Provider value={ {count , changeCount , setCount} }>
        {props.children}
    </counterContext.Provider>
}