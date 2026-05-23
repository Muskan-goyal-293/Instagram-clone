import { createContext, useState } from "react"

export const ProfileProviderContext = createContext();
export function ProfileContext({children}) {
    const [error , setError] = useState("");
    const[result ,setResult] = useState("");
    const[loading , setLoading] = useState(false);
  return (
    <ProfileProviderContext.Provider value={{error, setError , result , setResult , loading , setLoading}}>
        {children}
    </ProfileProviderContext.Provider>
  )
}

