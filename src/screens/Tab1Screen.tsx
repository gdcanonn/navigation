import React from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { TouchableIcon } from '../components/TouchableIcon'
import { styles } from '../theme/appTheme'

export const Tab1Screen = () => {
  const { top } = useSafeAreaInsets()

  return (
    <View style={{
      ...styles.globalMargin,
      marginTop: top
    }}>
      <Text style={styles.title}>Icons</Text>

      <Text>
        <TouchableIcon name="airplane-outline" />
        <TouchableIcon name="eye-outline" />
        <TouchableIcon name="calculator-outline" />
        <TouchableIcon name="basketball-outline" />
      </Text>
    </View>
  )
}
