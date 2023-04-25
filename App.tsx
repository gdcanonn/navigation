import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import 'react-native-gesture-handler'
import { DefaultTheme, Provider } from 'react-native-paper'
import { AuthProvider } from './src/context/AuthContext'
import { MenuLateral } from './src/navigator/MenuLateral'

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    secondaryContainer: 'transparent', // Use transparent to disable the little highlighting oval
  },
}

const App = () => {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <AppState>
          {/* <StackNavigator /> */}
          <MenuLateral />
        </AppState>
      </NavigationContainer>
    </Provider>
  )
}

const AppState = ({ children }: any) => {
  return <AuthProvider>
    {children}
  </AuthProvider>
}

export default App
