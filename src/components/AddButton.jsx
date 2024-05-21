import { TouchableOpacity, Text } from 'react-native'
import { colors } from '../constants/colors'
import React from 'react'

const AddButton = ({title, action, bgColor = colors.blue, textColor = colors.white}) => {
  return (
    <TouchableOpacity
        onPress={action}
        style={{
            backgroundColor: bgColor,
            padding: 10,
            borderRadius: 5,
            width: '100%',
            marginTop: 10,
        }}
    >
        <Text
            style={{
                color: textColor,
                textAlign: 'center',
            }}
        >{title}</Text>
    </TouchableOpacity>
  )
}

export default AddButton