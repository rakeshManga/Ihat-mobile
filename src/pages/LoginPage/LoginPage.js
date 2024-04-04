import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import LoginContainer from '../../container/LoginContainer/LoginContainer'
import api from '../../api';

const LoginPage = () => {

  const [loading, setLoading] = useState(false);
  const [captchaRes, setCaptchaRes] = useState([]);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [captchaImg, setCaptchaImg] = useState();
  useEffect(()=>{
    getCaptcha();
},[]);
const getCaptcha = async () => {
    let payload = {
        userId: 0,
        platform: 2
    }
    const res = await api.user.captchaImg(payload);
    if (res && res.data !=null ){
      setCaptchaRes(res.data.captchaImg);
    }
}
const ReloadCaptcha = async () => {
  setLoading(true);
  setCaptchaImg('');
  let payload={
    userId: 0,
    platform: 2
  }
  const res = await api.user.reloadCaptcha(payload);
  setCaptchaImg(res.data.captchaImg)
  setLoading(false);
  console.log("captcha>>>>>>>>",captchaImg);
}
  return (
    <View>
    <LoginContainer
    captchaRes={captchaRes}
    username={username}
    setUsername={setUsername}
    password={password}
    setPassword={setPassword}
    // captchaImg={captchaImg}
    // setCaptchaImg={setCaptchaImg}
    ReloadCaptcha={ReloadCaptcha}
    />
    </View>
  )
}

export default LoginPage

const styles = StyleSheet.create({})