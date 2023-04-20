import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'

export const SettingsScreen = () => {

  // const inserts = useSafeAreaInsets()

  return (
    // <View style={{ marginTop: inserts.top }}>
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Settings</Text>
    </View>
  )
}
