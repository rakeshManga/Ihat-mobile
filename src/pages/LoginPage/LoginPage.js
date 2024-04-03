import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import LoginContainer from '../../container/LoginContainer/LoginContainer'

const LoginPage = () => {

  const [loading, setLoading] = useState(false);
  const [captchaRes, setCaptchaRes] = useState();

  return (
    <View>
    <LoginContainer/>
    </View>
  )
}

export default LoginPage

const styles = StyleSheet.create({})