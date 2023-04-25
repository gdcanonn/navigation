import React, { useContext } from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { AuthContext } from '../context/AuthContext'
import { colores } from '../theme/appTheme'

interface Props {
  name: string
}

export const TouchableIcon = ({ name }: Props) => {

  const { changeFavoriteIcon } = useContext(AuthContext)

  return (
    <TouchableOpacity onPress={() => changeFavoriteIcon(name)}>
      <Icon name={name} size={40} color={colores.primary} />
    </TouchableOpacity>
  )
}
