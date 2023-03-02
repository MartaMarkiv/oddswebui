import React from "react"

export const UserContext = React.createContext()

export const UserProvider = ({ currentUser, setCurrentUser, children }) => {
  // const [currentUser, setCurrentUser] = React.useState(null)

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  )
}

export const useCurrentUser = () => React.useContext(UserContext)