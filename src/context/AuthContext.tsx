import { createContext, useReducer } from "react"
import { authReducer } from "./authReducer"


// 1. Definir como luce, que informacion tendre aqui
export interface AuthState {
  isLoggedIn: boolean
  username?: string
  favoriteIcon?: string
}

// 2. Estado inicial
export const authInitialState: AuthState = {
  isLoggedIn: false
}

// Lo usaremos para decirle a React como luce y que expone el contexto
export interface AuthContextProps {
  authState: AuthState
  signIn: () => void
  logout: () => void
  changeFavoriteIcon: (iconName: string) => void
  changeUsername: (username: string) => void
}

// 3. Crear el Contexto
export const AuthContext = createContext({} as AuthContextProps)

// 4. Exponer el Provvedor del estado
export const AuthProvider = ({ children }: any) => {
  const [authState, dispatch] = useReducer(authReducer, authInitialState)

  const signIn = () => {
    dispatch({ type: 'signIn' })
  }

  const logout = () => {
    dispatch({ type: 'logout' })
  }

  const changeFavoriteIcon = (iconName: string) => {
    dispatch({ type: 'changeFavIcon', payload: iconName })
  }

  const changeUsername = (username: string) => {
    dispatch({ type: 'changeUsername', payload: username })
  }

  return (
    <AuthContext.Provider value={{
      authState,
      signIn,
      logout,
      changeFavoriteIcon,
      changeUsername
    }}>
      {children}
    </AuthContext.Provider>
  )
}
