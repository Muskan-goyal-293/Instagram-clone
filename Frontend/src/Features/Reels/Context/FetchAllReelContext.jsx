import { createContext , useState } from "react"
export const    FetchAllReelProviderContext = createContext();

export function FetchAllReel({children}) {
  const[error , setError] = useState("");
  const [loading , setLoading] = useState(false);
  const [result , setResult] = useState([]);
    return (
   <FetchAllReelProviderContext.Provider value={{error, setError , loading, setLoading, result, setResult}}>
    {children}
   </FetchAllReelProviderContext.Provider>  
  )
}
