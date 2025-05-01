import { View, Text, StyleProp, ViewStyle } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';
import styles from './styles'

type AnimationProps = {
    src: string;
    contentStyle?: StyleProp<ViewStyle>;
}

const Animation: React.FC<AnimationProps> = ({
  src,
  contentStyle

}) => {
  return (
  <LottieView
      source={{ uri: src }}
      loop
      autoPlay
      style={[contentStyle]}
    />
  );
}

export default Animation
