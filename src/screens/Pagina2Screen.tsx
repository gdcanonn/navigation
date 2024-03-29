import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'

export const Pagina2Screen = () => {
  const navigator = useNavigation<StackNavigationProp<any>>()

  useEffect(() => {
    navigator.setOptions({
      title: 'Hola mundo',
      headerBackTitle: ''
    })
  }, [])

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}> Pagina 2 Screen</Text>

      <Button
        title='Ir pagina 3'
        onPress={() => navigator.navigate('Pagina3Screen')}
      />
    </View>
  )
}
