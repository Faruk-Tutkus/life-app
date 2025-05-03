import { View, Text } from 'react-native'
import { Button, CustomText, FloatingLabel, Sheet } from '@components'
import React, { useState } from 'react'
import styles from './styles'
import { Colors } from '@constants'
const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <View style={styles.container}>
      <Sheet contentContainerStyle={{ paddingVertical: 32, flexDirection: 'column', gap: 24 }}>
        <FloatingLabel
          iconLeft={'email'}
          placeholder="email"
          value={email}
          type='email-address'
          onChangeText={setEmail}
        />
        <FloatingLabel
          iconLeft={'lock'}
          iconRight={'eye'}
          placeholder="password"
          value={password}
          type='default'
          secureTextEntry={true}  
          onChangeText={setPassword}
        />
        <View style={{ flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', gap: 8 }}>
          <Button onPress={() => {/* handle login */}}>
            Login
          </Button>
          <CustomText>
            Forgot Password?
          </CustomText>
          <Button onPress={() => {/* handle login */}}>
            Sign Up
          </Button>
        </View>
      </Sheet>
    </View>
  )
}

export default Login