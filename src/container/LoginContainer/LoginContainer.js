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
    ImageBackground
} from 'react-native';
import { Common } from '../../assets/images';

// const db = openDatabase({ name: 'user_db.db' });

export default function LoginContainer() {

    const navigation = useNavigation()
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');


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



    // const loginWithSQLite = () => {
    //     if (username == '' || password == '') {

    //         alert('Please enter your username and password!');
    //         return;
    //     }
    //     db.transaction(
    //         tx => {
    //             tx.executeSql(
    //                 'SELECT * FROM tbl_user WHERE user_firstname= ?',
    //                 [username],
    //                 (tx, results) => {
    //                     let temp = [];
    //                     for (let i = 0; i < results.rows.length; ++i) {
    //                         temp.push(results.rows.item(i));
    //                     }
    //                     console.log('responseess', temp);
    //                     if (temp.length == 0) {
    //                         alert("username and password has be deleted ")
    //                     }
    //                     else if (
    //                         `${temp[0].user_firstname}` == `${username}` &&
    //                         `${temp[0].user_contact}` == `${password}`
    //                     ) {
    //                         AsynsStorage.setItem('keepLoggedIn', 'true');
    //                         navigation.navigate('ViewAll');
    //                     }
    //                     //   else if(
    //                     //     `${temp[0].user_id}` == undefined && 
    //                     //     `${temp[0].user_id}` == null &&
    //                     //     `${temp[0].user_id}` == ""){
    //                     //     alert("username and password has be deleted ")
    //                     //   }
    //                     else {
    //                         alert('please enter valid details');
    //                     }
    //                 },
    //             );
    //         },
    //         e => {
    //             Alert.alert(
    //                 'Error',
    //                 'Login failed ' + e.message,
    //                 [
    //                     {
    //                         text: 'Ok',
    //                     },
    //                 ],
    //                 { cancelable: false },
    //             );
    //         },
    //     );
    // };



    return (
        <TouchableWithoutFeedback style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}>

            <ImageBackground source={Common.LOGIN_IMAGE} style={styles.container}>
                <View style={styles.headerContainer}>
                    <View style={styles.backButtonContainer}>
                    </View>
                </View>
                <View style={styles.mainContainer}>

                    <View style={styles.inputContainer}>
                        <TextInput
                            placeholder="User Name"
                            keyboardType="default"
                            style={styles.textInputStyle}
                            value={username}
                            onChangeText={(txt) => { setusername(txt) }}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                            placeholder="Password"
                            keyboardType="number-pad"
                            secureTextEntry={true}
                            style={styles.textInputStyle}
                            value={password}
                            onChangeText={(txt) => { setpassword(txt) }}
                        />
                    </View>
                    <TouchableOpacity style={styles.button}
                        onPress={() => {
                            loginWithSQLite()
                        }}>
                        <Text style={[styles.headeringStyle, { color: "#FFF" }]}>LOGIN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate("Register")
                    }}>
                        <View style={{ width: "80%", alignItems: "center", justifyContent: "center", flexDirection: "row", alignSelf: "center", marginTop: 30 }}>
                            <Text style={styles.svText}>Click here for Register </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </TouchableWithoutFeedback>
    );
}

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
        marginTop: "100%"
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
        height: 60,
        alignSelf: "center",
        marginTop: 5,
    },
    placeholderText: {
        color: "#000",
        fontSize: 16,
    },
    textInputStyle: {
        width: "100%",
        height: 40,
        paddingLeft: 10,
        borderWidth:1,
        borderColor:"block"
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
    }
});

