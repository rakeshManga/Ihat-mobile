import AsyncStorage  from '@react-native-community/async-storage'
// import messaging from '@react-native-firebase/messaging';
import Config from 'react-native-config';
import { ORG_NAME } from '../styles/Const';
import { AppOkAlert } from './AlertHelper';

const USER_ID = "userId";
const LOGIN_NAME = 'loginName';
const LOGIN_PASSWORD = 'loginPassword'
const LOGIN_DATA = "loginData";
const STORAGE_FCM_TOKEN = "fcmToken";
const LANGUAGE_PREF = "language_pref";
const JWT_TOKEN = "jwtToken";
const APP_INSTALLED = "appInstalled";
const TOKEN_EXPIRED_TIMER = 'tokenExpiredTimer';
const IS_AGENT = "isAgent";
const COMP_NAME = 'componentName';


export const saveUserProfileInfo = async (userInfo) => {
    await AsyncStorage.setItem(LOGIN_DATA, JSON.stringify(userInfo));
    if(userInfo && userInfo.jwt){
        await AsyncStorage.setItem(JWT_TOKEN, userInfo.jwt);
        await AsyncStorage.setItem(TOKEN_EXPIRED_TIMER, `${userInfo.token_expired_at}`)
    }else {
        await AsyncStorage.setItem(JWT_TOKEN,  '');
        await AsyncStorage.setItem(TOKEN_EXPIRED_TIMER,  '');
    }
}
    

export const getUserProfileInfo = async () => {
    const userProfileInfo = await AsyncStorage.getItem(LOGIN_DATA);
    return JSON.parse(userProfileInfo);
}

export const saveUserId = async (userId) => {
    await AsyncStorage.setItem(USER_ID, userId ? `${userId}` : '')
}
export const saveLoginName = async (loginName) => {
    await AsyncStorage.setItem(LOGIN_NAME, loginName ? `${loginName}` : '')
}
export const saveLoginPassword = async (loginPassword) => {
    await AsyncStorage.setItem(LOGIN_PASSWORD, loginPassword ? `${loginPassword}` : '')
}

export const saveAgent = async (isAgent) => {
    await AsyncStorage.setItem(IS_AGENT, isAgent ? `${isAgent}` : '')
}
export const saveOrganizationName = async (compName) => {
    await AsyncStorage.setItem(COMP_NAME, compName ? `${compName}` : '')
}
export const getOrganizationName = async () => {
    return await AsyncStorage.getItem(COMP_NAME);
}

export const getAgent = async () => {
    return await AsyncStorage.getItem(IS_AGENT);
}



export const getUserId = async () => {
    return await AsyncStorage.getItem(USER_ID);
}
export const getLoginName = async () => {
    return await AsyncStorage.getItem(LOGIN_NAME);
}
export const getLoginPassword = async () => {
    return await AsyncStorage.getItem(LOGIN_PASSWORD);
}
export const getJwtToken = async () => {
    return await AsyncStorage.getItem(JWT_TOKEN);
}

export const setJwtToken = async (jwtToken) => {
    await AsyncStorage.setItem(JWT_TOKEN,  jwtToken);
}

export const getExpireJwtTime = async () => {
    return await AsyncStorage.getItem(TOKEN_EXPIRED_TIMER);
}

export const setExpireJwtTime = async (jwtTokenTime) => {
    await AsyncStorage.setItem(TOKEN_EXPIRED_TIMER,  `${jwtTokenTime}`);
}

// export const getFCMToken = async () => {
//     let fcmToken = await AsyncStorage.getItem(STORAGE_FCM_TOKEN);
//     console.log("FCM TOKEN 1 *******:- ", fcmToken);
//     if (!fcmToken) {
//         fcmToken = await messaging().getToken();
//         if (fcmToken) {
//             // user has a device token
//             console.log("FCM TOKEN *******:- ", fcmToken);
//             await AsyncStorage.setItem(STORAGE_FCM_TOKEN, fcmToken);
//         }
//     }
//     return fcmToken;
// }

export const setAppInstalled = async() => {
    await AsyncStorage.setItem(APP_INSTALLED, "true");
}

export const getAppInstalled = async() => {
    return await AsyncStorage.getItem(APP_INSTALLED);
}

export const saveLanguagePref = async (language) => {
    await AsyncStorage.setItem(LANGUAGE_PREF, language);
}

export const getLanguagePref = async () => {
    const language = await AsyncStorage.getItem(LANGUAGE_PREF);
    if(language){
        return language;
    }else {
        if(Config.ORG_NAME == ORG_NAME.UP_VIDMED){
            return "hi"
        }else {
            return "en";
        }
    }
}

export function isWalletUsagesChargesDefined(wallet) {
    if (wallet && !wallet.usageCharges) {
      AppOkAlert("Usage charges not defined for given corporate", () => { });
      return false;
    }
    return true
  }

