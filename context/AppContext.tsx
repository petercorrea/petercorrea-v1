import { createContext, useContext, useState } from "react"

interface AppContextInterface {
  appContext: { show: boolean, },
  setAppContext: any,
}

const ContextComponent = createContext({} as AppContextInterface | null)

export function useAppContext() {
  return useContext(ContextComponent)
}

export function AppContextWrapper({ children }) {
  let [appContext, setAppContext] = useState({ show: true })
  const AppContext = { appContext: appContext, setAppContext: setAppContext }

  return (
    <ContextComponent.Provider value={AppContext}>
      {children}
    </ContextComponent.Provider>
  )
}

