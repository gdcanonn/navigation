import React, { useContext } from 'react'
import { Button, View } from 'react-native'
import { Text } from 'react-native-paper'
import { AuthContext } from '../context/AuthContext'
import { styles } from '../theme/appTheme'

export const ContactsScreen = () => {
  const { authState: { isLoggedIn }, signIn } = useContext(AuthContext)

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Contacts Screen</Text>

      {!isLoggedIn && <Button title='Sign in' onPress={signIn} />}
    </View>
  )
}
