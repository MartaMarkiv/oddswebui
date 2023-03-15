import React, { useContext } from "react"

export const UserContext = React.createContext()

export const UserProvider = ({ currentUser, setCurrentUser, children }) => {

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  )
}

export const useCurrentUser = () => useContext(UserContext)