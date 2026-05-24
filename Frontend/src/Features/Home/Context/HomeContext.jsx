import { createContext , useState } from "react"

export const HomeProviderContext = createContext()
export function HomeContext({children}) {
  const [loading , setLoading] = useState(false);
  const [result , setResult]= useState([]);
  const [error , setError] = useState("");
  return (
    <HomeProviderContext.Provider value={{error , setError , loading , setLoading , result , setResult}}>
      {children}
    </HomeProviderContext.Provider>
  )
}
