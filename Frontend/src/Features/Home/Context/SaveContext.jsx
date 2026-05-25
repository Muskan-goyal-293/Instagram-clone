import { createContext, useState } from "react"

export  const SaveProviderContext = createContext() 

export function SaveContext({children}) {
const [error, setError] = useState("");
const [result , setResult] = useState("");

    return (
   <SaveProviderContext.Provider value={{error, setError , result , setResult }}>
    {children}
   </SaveProviderContext.Provider>
    )
}

