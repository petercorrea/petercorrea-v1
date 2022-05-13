import { createContext, useContext, useState } from "react"

const AppContext = createContext({})

export function AppContextWrapper({ children }) {
  let [appContext, setAppContext] = useState({ show: true })

  return (
    <AppContext.Provider value={{ appContext, setAppContext }}>
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext)
}
