import { createContext , useState } from "react"
export const LikeProviderContext = createContext();
export function LikeContext({children}) {
  const [result , setResult] = useState("");
  const[error , setError] = useState("");
    return (
        <LikeProviderContext.Provider value={{result , setResult , error ,setError}}>
            {children}
        </LikeProviderContext.Provider>
    )
}
