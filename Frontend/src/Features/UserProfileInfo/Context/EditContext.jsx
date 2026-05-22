import { createContext, useState } from "react"
export const EditProviderContext=createContext()
export function EditContext({children}){
const[loading , setLoading] = useState(false);
const[result, setResult] = useState("");
const[error , setError] = useState("");
  return (
    <EditProviderContext.Provider value={{error , setError , result, setResult , loading , setLoading}}>
        {children}
    </EditProviderContext.Provider>   
)
}