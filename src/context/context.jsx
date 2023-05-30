import React from 'react'
import  { createContext, useState } from "react";
export const UserContext = createContext();
export const ContextProvider = ({children}) => {
    const [user, setUser] = useState([]);
  return (
      <UserContext.Provider value={[user,setUser]}>
          {children}
    </UserContext.Provider>
  )
}

export default ContextProvider