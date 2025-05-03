import { View, Text, StyleProp, ViewStyle } from 'react-native'
import React from 'react'
import styles from './styles'
interface SheetProps {
  children: React.ReactNode;
  contentContainerStyle?: StyleProp<ViewStyle>;
}

const Sheet = ({ children, contentContainerStyle }: SheetProps) => {
  return (
    <View style={[styles.container, contentContainerStyle]}>
      {children}
    </View>
  )
}

export default Sheet;
