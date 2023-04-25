import React from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Ionicons'
import { colores, styles } from '../theme/appTheme'

export const Tab1Screen = () => {
  const { top } = useSafeAreaInsets()

  return (
    <View style={{
      ...styles.globalMargin,
      marginTop: top
    }}>
      <Text style={styles.title}>Icons</Text>
      <Icon name="airplane-outline" size={40} color={colores.primary} />
    </View>
  )
}
