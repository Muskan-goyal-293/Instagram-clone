import { createContext , useState } from "react"
export const ReelProviderContext = createContext();

export function ReelContext({children}) {
  const[error , setError] = useState("");
  const [loading , setLoading] = useState(false);
  const [result , setResult] = useState("");
    return (
   <ReelProviderContext.Provider value={{error, setError , loading, setLoading, result, setResult}}>
    {children}
   </ReelProviderContext.Provider>  
  )
}
