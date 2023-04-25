import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { RouteProp } from '@react-navigation/native'
import { Platform } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { Tab1Screen } from '../screens/Tab1Screen'
import { colores } from '../theme/appTheme'
import { StackNavigator } from './StackNavigator'
import { TopTabNavigator } from './TopTabNavigator'


export const BottomTabs = () => {
  return Platform.OS === 'ios' ? <TabsIOS /> : <TabsAndroid />
}

type IconProps = {
  focused: boolean
  color: string
}

const getIconsTabs = (route: RouteProp<any, any>) => ({ color, focused }: IconProps) => {
  let iconName = ''
  switch (route.name) {
    case 'Tab1Screen':
      iconName = 'attach-outline'
      break
    case 'TopTabNavigator':
      iconName = 'cloud-outline'
      break
    case 'StackNavigator':
      iconName = 'map-outline'
      break
  }

  return <Icon name={iconName} size={30} color={color} />
}


const BottomTabAndroid = createMaterialBottomTabNavigator()

function TabsAndroid() {
  return (
    <BottomTabAndroid.Navigator
      sceneAnimationEnabled={true}
      barStyle={{
        backgroundColor: colores.primary
      }}
      shifting={false}
      activeColor='white'
      inactiveColor='#9BA4B5'
      screenOptions={({ route }) => ({
        tabBarIcon: getIconsTabs(route)
      })}
    >
      <BottomTabAndroid.Screen name="Tab1Screen" options={{ title: 'Tab 1' }} component={Tab1Screen} />
      <BottomTabAndroid.Screen name="TopTabNavigator" options={{ title: 'Tab 2' }} component={TopTabNavigator} />
      <BottomTabAndroid.Screen name="StackNavigator" options={{ title: 'Stack' }} component={StackNavigator} />
    </BottomTabAndroid.Navigator>
  )
}

const BottomTabIOS = createBottomTabNavigator()

const TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white'
      }}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colores.primary,
        tabBarStyle: {
          borderTopColor: colores.primary,
          borderTopWidth: 0,
          elevation: 0
        },
        tabBarLabelStyle: {
          fontSize: 15
        },
        tabBarIcon: getIconsTabs(route)
      })}
    >
      {/* <Tab.Screen name="Tab1Screen" options={{ title: 'Tab 1', tabBarIcon: (props) => <Text style={{ color: props.color }}>T1</Text> }} component={Tab1Screen} /> */}
      <BottomTabIOS.Screen name="Tab1Screen" options={{ title: 'Tab 1' }} component={Tab1Screen} />
      <BottomTabIOS.Screen name="TopTabNavigator" options={{ title: 'Tab 2' }} component={TopTabNavigator} />
      <BottomTabIOS.Screen name="StackNavigator" options={{ title: 'Stack' }} component={StackNavigator} />
    </BottomTabIOS.Navigator>
  )
}
