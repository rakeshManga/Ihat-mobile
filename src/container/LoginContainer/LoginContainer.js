import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard,
    StatusBar,
    BackHandler,
    Alert,
    ImageBackground,
    ScrollView
} from 'react-native';
import { Common } from '../../assets/images';
import Ionicons from 'react-native-vector-icons/Ionicons';

import api from '../../api';
// const db = openDatabase({ name: 'user_db.db' });

const LoginContainer = (props) => {

    const navigation = useNavigation();

    const { 
        captchaRes, 
        username, 
        setUsername, 
        password, 
        setPassword,
        captchaImg,
        setCaptchaImg ,
        ReloadCaptcha,
        loading,
        setLoading
    } = props
    console.log("captchaRes>>>>>>>>>>111111", captchaRes);

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', backAction);

        return () =>
            BackHandler.removeEventListener('hardwareBackPress', backAction);
    }, []);

    const backAction = () => {
        if (navigation.isFocused()) {
            Alert.alert('', 'Are you sure you want to exit app?', [
                {
                    text: 'Cancel',
                    onPress: () => null,
                    style: 'cancel',
                },
                { text: 'YES', onPress: () => BackHandler.exitApp() },
            ]);
            return true;
        }
    };

    return (
        <TouchableWithoutFeedback style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}>
            <ImageBackground source={Common.LOGIN_IMAGE} style={styles.container}>
                <ScrollView style={styles.mainContainer}>

                    <View style={styles.inputContainer}>
                        <TextInput
                            placeholder="User Name"
                            keyboardType="default"
                            style={styles.textInputStyle}
                            value={username}
                            onChangeText={(txt) => { setUsername(txt) }}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                            placeholder="Password"
                            keyboardType="number-pad"
                            secureTextEntry={true}
                            style={styles.textInputStyle}
                            value={password}
                            onChangeText={(txt) => { setPassword(txt) }}
                        />
                    </View>
                    <View style={{
                        width: "80%",
                        height: 30,
                        alignSelf: "center",
                        marginTop: 5,
                        flexDirection: "row",
                        justifyContent: "space-around"
                    }}>
                        <View style={styles.inputContainer1}>
                            <Image style={{
                                width: "50%",
                                height: 30,

                            }}
                            resizeMode={"contain"}
                                source={{ uri: 'data:image/png;base64,{' + captchaRes + '}' }}
                            />
                        </View>
                        <TouchableOpacity onPress={() => { ReloadCaptcha() }}>
                            <Ionicons name='reload' size={25} color="#000" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                            placeholder="Captcha"
                            keyboardType="default"
                            style={styles.captchaStyle}
                            value={captchaImg}
                            onChangeText={(txt) => { setCaptchaImg(txt) }}
                        />
                    </View>
                    <TouchableOpacity style={styles.button}
                        onPress={() => {
                            loginWithSQLite()
                        }}>
                        <Text style={[styles.headeringStyle, { color: "#FFF" }]}>LOGIN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        // navigation.navigate("Register")
                    }}>
                        <View style={{
                            width: "80%",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "row",
                            alignSelf: "center",
                            marginTop: 30
                        }}>
                            <Text style={styles.svText}>Click here for Register </Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </ImageBackground>
        </TouchableWithoutFeedback>
    );
}
export default LoginContainer;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%"
    },
    headerContainer: {
        width: "100%",
        height: 60,
        marginTop: StatusBar.currentHeight,
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 100
    },
    headeringStyle: {
        fontWeight: "bold",
        marginLeft: 10,
        fontSize: 20,
        color: "#000"
    },
    backButtonContainer: {
        flexDirection: "row"

    },
    mainContainer: {
        width: "100%",
        height: "75%",
        marginTop: "125%"
        // backgroundColor: "white", 
        // borderTopLeftRadius: 50,
        // borderTopRightRadius: 50,
    },
    welcomeHeading: {
        width: "100%",
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
        height: 100
    },
    inputContainer: {
        width: "80%",
        height: 50,
        alignSelf: "center",
        // marginTop: 5,
    },
    placeholderText: {
        color: "#000",
        fontSize: 16,
    },
    textInputStyle: {
        width: "100%",
        height: 40,
        paddingLeft: 10,
        borderWidth: 1,
        borderColor: "block"
    },
    svpassword: {
        width: "80%",
        alignSelf: "center",
        height: 75,
        flexDirection: "row",
        alignItems: "center",

    },
    svText: {
        color: "rgb(0, 153, 255)"
    },
    button: {
        width: "80%",
        height: 38,
        backgroundColor: "rgb(0, 153, 255)",
        alignSelf: "center",
        // borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 5
    },
    inputContainer1: {
        width: "75%",
        height: 30,
        alignContent: "center",
        borderWidth: 1, 
        alignItems: "center",
        justifyContent: "center"
    },
    captchaStyle: {
        width: "100%",
        height: 40,
        paddingLeft: 10,
        // borderWidth: 1,
        borderBottomWidth: 1,
        borderColor: "block"
    }
});

