import { StyleProp, Text, TextStyle } from 'react-native'
import React from 'react'
import styles from './styles'

interface CustomTextProps {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
}

const CustomText = ({ children, style }: CustomTextProps) => {
  return (
    <Text style={[styles.text, style]}>
      {children}
    </Text>
  )
}

export default CustomText;