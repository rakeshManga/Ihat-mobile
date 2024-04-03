import React, { useRef, useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { LOGIN_PAGE } from '../../routes/RouteConst';

const SplashPage= ({ navigation }) => {
    let animationRef = useRef();

  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

//   const getRegisteredData = async () => {
//     let data = await AsyncStorage.getItem('keepLoggedIn');
//     console.log('AsyncStorage.getItem', data);

//     console.log('keeploggedIn', data);
//     if (data && data == 'true') {
//      navigation.navigate("ViewAll")
//     }else{
//         navigation.navigate("Login")
//     }
//   };
    // const getasyc = async () => {

    //     let data = await AsyncStorage.getItem('keepLoggedIn');
    // console.log('AsyncStorage.getItem', data);
    // // Alert("Rakesh....")

    // console.log('keeploggedIn', data);
    // if (data && data == 'true') {
    // //  navigation.navigate("ViewAll")
    // }else{
    //     navigation.navigate("LoginPage")
    // }
    // }

    const isFocused = useIsFocused()

    useEffect(() => {

        // To play complete animation
        // animationRef.play();
        // getRegisteredData();

        setTimeout(() => {
            // navigation.navigate(LOGIN_PAGE)
            navigation.replace(LOGIN_PAGE)
        }, 3000);

    }, [isFocused]);

    return (
        <SafeAreaView style={{ flex: 1}}>
            <View style={styles.container}>
                <Image style={styles.image} source={require("../../assets/images/splash_png/splash.png")}/>
            </View>

        </SafeAreaView>
    );
};

export default SplashPage;

const styles = StyleSheet.create({
    header: {
        fontSize: 24,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    smallText: {
        fontSize: 18,
        textAlign: 'center',
    },
    image:{
        height:"100%",
        width:"100%",
    }
});