import { View, Text, Image, TextInput, Animated, TextStyle, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import styles from './styles'
import { Colors } from '@constants'
import Icon from 'icons'
type TextInputType = 'default' | 'email-address' | 'number-pad'; // vs.
interface FloatingLabelProps {
  value: string;
  placeholder: string;
  iconLeft?: any;
  iconRight?: any;
  type?: TextInputType;
  secureTextEntry?: boolean;
  onChangeText: (text: string) => void;
}

const FloatingLabel = ({ value, placeholder, iconLeft, iconRight, onChangeText, type, secureTextEntry }: FloatingLabelProps) => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const isFocused = useRef(false);
  const [showPassword, setShowPassword] = useState(false);
  console.log(showPassword)
  const handleFocus = () => {
    isFocused.current = true;
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const handleBlur = () => {
    isFocused.current = false;
    if (!value) {
      Animated.timing(animatedValue, {
        toValue: 0,
        duration: 400,
        useNativeDriver: false,
      }).start();
    }
  };

  const labelStyle: Animated.WithAnimatedValue<TextStyle> = {
    position: 'absolute',
    fontSize: 16,
    fontWeight: 'bold',
    left: animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [16, -4],
    }),
    top: animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [10, -27],
    }),
    color: animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [Colors.light.surface, Colors.light.primary],
    }),
  };

  return (
    <View style={styles.inputContainer}>
      
      {iconLeft &&
        <Icon
          name={iconLeft}
          size={20}
          color={Colors.light.text}
        />
      }
      <View style={{ flex: 1, position: 'relative' }}>
        <Animated.Text style={labelStyle}>
          {placeholder}
        </Animated.Text>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          onFocus={handleFocus}
          onBlur={handleBlur}
          keyboardType={type}
          secureTextEntry={iconRight && !showPassword}
          
        />
      </View>
      {iconRight &&
        <TouchableOpacity
          onPress={()=> {
            setShowPassword(!showPassword);
          }}
        >
          {showPassword ?
          <Icon
            name={iconRight}
            size={20}
            color={Colors.light.text}
          />  :
          <Icon
            name='eye-with-line'
            size={20}
            color={Colors.light.text}
          /> 
        }
        </TouchableOpacity>
      }
    </View>
  )
}

export default FloatingLabel;