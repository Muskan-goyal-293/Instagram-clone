import React from 'react'
import { createContext , useState} from 'react'
export const PostMeProviderContext = createContext();

export function PostMeContext({ children }) {

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState([]);

  return (
    <PostMeProviderContext.Provider
      value={{
        error,
        setError,
        loading,
        setLoading,
        result,
        setResult
      }}
    >
      {children}
    </PostMeProviderContext.Provider>
  );
}
