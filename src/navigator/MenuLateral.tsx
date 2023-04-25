import { DrawerContentComponentProps, DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer'
import { Image, Text, View, useWindowDimensions } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Ionicons'
import { SettingsScreen } from '../screens/SettingsScreen'
import { styles } from '../theme/appTheme'
import { BottomTabs } from './BottomTabs'

const Drawer = createDrawerNavigator()

export const MenuLateral = () => {

  const { width } = useWindowDimensions()

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: width >= 768 ? 'permanent' : 'front',
        headerShown: false
      }}
      drawerContent={(props) => <MenuInterno {...props} />}
    >
      {/* <Drawer.Screen name="StackNavigator" component={StackNavigator} /> */}
      <Drawer.Screen name="BottomTabs" component={BottomTabs} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  )
}

const MenuInterno = ({ navigation }: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      {/* Avatar */}
      <View style={styles.avatarContainer}>
        <Image
          source={{ uri: 'https://as1.ftcdn.net/v2/jpg/01/78/64/92/1000_F_178649245_UjyN9fuyvsLFro8jKc4PgmIk1FSUEVZY.jpg' }}
          style={styles.avatar}
        />
      </View>

      {/* Menu options */}
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.menuBoton}
          onPress={() => navigation.navigate('BottomTabs')}
        >
          <Icon name='compass-outline' size={30} color='gray' />
          <Text style={styles.menuTexto}>Navegacion</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuBoton}
          onPress={() => navigation.navigate('SettingsScreen')}
        >
          <Icon name='cog-outline' size={30} color='gray' />
          <Text style={styles.menuTexto}>Sttings</Text>
        </TouchableOpacity>
      </View>

    </DrawerContentScrollView>
  )
}
