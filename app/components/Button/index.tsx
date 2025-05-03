import { View, Text, TouchableOpacity, StyleProp, ViewStyle, TextStyle } from 'react-native'
import React from 'react'
import styles from './styles'
import CustomText from 'components/CustomText'

interface ButtonProps {
  onPress?: () => void;
  disabled?: boolean;
  disabledColor?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
  textStyle?: StyleProp<TextStyle>;
}

const Button = ({ onPress, disabled, disabledColor, containerStyle, textStyle, children }: ButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
        <View style={[styles.button, containerStyle]}>
          <CustomText style={[ styles.buttonText, textStyle]}>{children}</CustomText>
        </View>
    </TouchableOpacity>
  )
}

export default Button