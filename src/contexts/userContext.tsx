import { createContext,  useState } from "react"

interface UserContextData {
    openMenu: boolean,
    setOpenMenu: (openMenu: boolean) => void
}

interface UserContextProvider {
    children: React.ReactNode
}

export const  UserContext = createContext({} as UserContextData)

export const UserStore = ({ children }: UserContextProvider) => {
    const [openMenu, setOpenMenu] = useState(false)

    return  (
        <UserContext.Provider value={{openMenu, setOpenMenu}}>
            {children}
        </UserContext.Provider>
    )
}