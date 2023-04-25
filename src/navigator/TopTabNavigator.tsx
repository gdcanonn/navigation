import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { LogBox } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Ionicons'
import { AlbumsScreen } from '../screens/AlbumsScreen'
import { ChatScreen } from '../screens/ChatScreen'
import { ContactsScreen } from '../screens/ContactsScreen'
import { colores } from '../theme/appTheme'

LogBox.ignoreLogs(['Sending'])

const Tab = createMaterialTopTabNavigator()

export const TopTabNavigator = () => {
  const { top } = useSafeAreaInsets()

  return (
    <Tab.Navigator
      style={{ marginTop: top }}
      sceneContainerStyle={{
        backgroundColor: 'white'
      }}
      screenOptions={({ route }) => ({
        tabBarPressColor: colores.primary,
        tabBarShowIcon: true,
        tabBarIndicatorStyle: {
          backgroundColor: colores.primary,
        },
        tabBarStyle: {
          elevation: 0,
          shadowColor: 'transparent'
        },
        tabBarIcon: ({ color, focused }) => {
          let iconName = ''
          switch (route.name) {
            case 'ChatScreen':
              iconName = 'chatbubble-ellipses-outline'
              break
            case 'ContactsScreen':
              iconName = 'people-outline'
              break
            case 'AlbumsScreen':
              iconName = 'albums-outline'
              break
          }

          return <Icon name={iconName} size={20} color={color} />
        }
      })}
    >
      <Tab.Screen name="ChatScreen" options={{ title: 'Chat' }} component={ChatScreen} />
      <Tab.Screen name="ContactsScreen" options={{ title: 'Contacts' }} component={ContactsScreen} />
      <Tab.Screen name="AlbumsScreen" options={{ title: 'Albums' }} component={AlbumsScreen} />
    </Tab.Navigator>
  )
}
