import { StackScreenProps } from '@react-navigation/stack'
import React, { useContext, useEffect } from 'react'
import { Text, View } from 'react-native'
import { AuthContext } from '../context/AuthContext'
import { RootStackParam } from '../navigator/StackNavigator'
import { styles } from '../theme/appTheme'

// interface RouterParams {
//   id: string
//   nombre: string
// }

interface Props extends StackScreenProps<RootStackParam, 'PersonaScreen'> { }

export const PersonaScreen = ({ route, navigation }: Props) => {

  const { changeUsername } = useContext(AuthContext)

  // const params = route.params as RouterParams
  const params = route.params

  useEffect(() => {
    changeUsername(params.nombre)
  }, [])

  useEffect(() => {
    navigation.setOptions({
      title: params.nombre
    })
  }, [])

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>
        {JSON.stringify(params, null, 2)}
      </Text>
    </View>
  )
}
