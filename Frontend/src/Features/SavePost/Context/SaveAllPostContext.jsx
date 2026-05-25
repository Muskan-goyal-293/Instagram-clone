import { createContext , useContext, useState } from "react";

export const SaveAllPostProviderContext =createContext();
export  function SaveAllPostContext({children}) {
const [loading , setLoading] = useState(false);
const [error , setError ] =useState("");
const [result , setResult] = useState([]);
    return (
        <SaveAllPostProviderContext.Provider value ={{loading , setLoading , error , setError, result, setResult}}>
           {children}
        </SaveAllPostProviderContext.Provider>
  )
}