import { createContext } from "react"
import { useState } from "react"

export const PostProviderContext = createContext();
export function PostContext({children}) {
 const [error , setError] = useState("");
 const [loading , setLoading] = useState(false);
 const[result , setResult] = useState("");
 
  return (
  <PostProviderContext.Provider value={{error , setError , loading ,setLoading , result , setResult}}>
    {children}
  </PostProviderContext.Provider>
   )
}
