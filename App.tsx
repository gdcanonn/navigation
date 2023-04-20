import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import 'react-native-gesture-handler'
import { MenuLateral } from './src/navigator/MenuLateral'

const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <MenuLateral />
    </NavigationContainer>
  )
}

export default App
