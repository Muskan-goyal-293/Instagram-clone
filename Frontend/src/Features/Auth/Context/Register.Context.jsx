import { createContext } from "react"
import { useState } from "react"
export const RegisterProviderContext = createContext()
export function RegisterContext({children}) {
const [error , setError] = useState(null);
const[loading , setLoading] = useState(false);
const[result , setResult] = useState("")
  return (
<RegisterProviderContext.Provider value={{error , setError , loading , setLoading, result , setResult}}>
{children}
</RegisterProviderContext.Provider>
  )
}
