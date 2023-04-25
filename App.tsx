import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import 'react-native-gesture-handler'
import { DefaultTheme, Provider } from 'react-native-paper'
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
        {/* <StackNavigator /> */}
        <MenuLateral />
      </NavigationContainer>
    </Provider>
  )
}

export default App
