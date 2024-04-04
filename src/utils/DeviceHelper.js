import NetInfo from '@react-native-community/netinfo';
import {Linking, Platform, Share} from 'react-native';
import Config from 'react-native-config';
import api from '../api';
// import {
//   PayUBiz,
//   PayuEvent,
//   PAYU_PAYMENT_FAILED,
//   PAYU_PAYMENT_SUCCESS,
// } from '../payUBizNativeBridge/PayUModule';
import { PAYMENT_TYPE } from '../styles/Const';
import {AppOkAlert} from './AlertHelper';
import { isWalletUsagesChargesDefined } from './AsyncStorageHelper';
import DateHelper from './DateHelper';
import { fnDecrypt } from './EncryptDecryptHelper';

const DeviceHelper = {
  isConnectedToInternet: async function () {
    try {
      let state = await NetInfo.fetch();
      console.log('state.isConnected :- ', state.isConnected);
      return state.isConnected;
    } catch (err) {
      console.log(err);
      return false;
    }
  },
};

export const makeCall = (number) => {
  let numberURL;
  if (Platform.OS != 'android') {
    numberURL = `telprompt:${number}`;
  } else {
    numberURL = `tel:${number}`;
  }
  Linking.canOpenURL(numberURL)
    .then((supported) => {
      if (!supported) {
        AppOkAlert(
          'Phone number is not available',
          () => {},
          'OK',
          'Invalid Number',
        );
      } else {
        return Linking.openURL(numberURL);
      }
    })
    .catch((err) => console.log(err));
};

export const ShareToOtherApp = async (title, message) => {
  try {
    const result = await Share.share({
      message: message,
      title: title,
    });

    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // shared with activity type of result.activityType
      } else {
        // shared
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
    }
  } catch (error) {
    AppOkAlert('Please try again after sometime.', () => {});
  }
};

export const OpenLinkToOtherApp = (link) => {
  if (Platform.OS == 'android' && Platform.Version >= 30) {
    PayUBiz.openLink(link);
    return;
  }
  Linking.canOpenURL(link).then((supported) => {
    if (supported) {
      Linking.openURL(link);
    } else {
      console.log("Don't know how to open URI: " + this.props.url);
    }
  });
};

export const doNativePayment = async(userInfo, amount, wallet, callback) => {
  const isDefined =  isWalletUsagesChargesDefined(wallet);
  if(!isDefined) return;
  let paymentValues = {
    merchantId: `${Config.PAYMENT_MERCHANT_ID}`,
    merchantKey: `${Config.PAYMENT_MERCHANT_KEY}`,
    amount: `${amount}`,
    email: userInfo.email || Config.SUPPORT_EMAIL,
    productinfo: 'Fever',
    firstname: userInfo.first_name || 'Pankaj',
    phone: '9997011740',
    sUrl:
      Platform.OS == 'android'
        ? Config.PAYMENT_ANDROID_SUCCESS_LINK
        : Config.PAYMENT_IOS_SUCCESS_LINK,
    fUrl:
      Platform.OS == 'android'
        ? Config.PAYMENT_ANDROID_ERROR_LINK
        : Config.PAYMENT_IOS_ERROR_LINK,
    txnid: `${Date.now()}`,
    udf1: '',
    udf2: '',
    udf3: '',
    udf4: '',
    udf5: '',
    salt: Config.PAYMENT_SALT,
    env: Config.PAYMENT_ENV,
    beneficiaryid: userInfo.id,
    surepayCount: `${Config.PAYMENT_SUREPAY_COUNT}`,
    hashcode: '',
  };
  const generateHashPayload = {
    allowed_consultations: 1,
    beneficiary_id: userInfo.id,
    consultation_id: undefined,
    convenience_amount: 0,
    convenience_charge: 0,
    doctor_id: undefined, //
    email: paymentValues.email,
    first_name: paymentValues.firstname,
    payment_info: {
      amount_paid: paymentValues.amount,
      date_time: DateHelper.formatToDateTime(new Date().toString()),
      discount_amount: paymentValues.amount,
      promo_code: 0,
      status: 'true',
      total_amount: paymentValues.amount,
    },
    plan_type: 'VM6M',
    product_info: 'Fever',
    udf1: '',
    udf2: '',
    udf3: '',
    udf4: '',
    udf5: '',
  };
  
  const res = await api.payment.generateHash({
    ...generateHashPayload,
    payment_type: PAYMENT_TYPE.LAB
  });
  if (res && res.status == 'OK' && res.data) {
    const {hash, txnid, key, salt, /*furl, curl, surl*/} = res.data;
      paymentValues = {
        ...paymentValues,
        hashcode: hash,
        merchantKey:key,
        salt: salt,
        txnid: txnid,
        // sUrl: `${API_BASE_URL}/${surl}`,
        // fUrl: `${API_BASE_URL}/${furl}`,
        // cUrl: `${API_BASE_URL}/${curl}`,
      };
      console.log("paymentValues ", paymentValues)
    return new Promise(async (resolve, reject) => {
      PayuEvent.addListener('PAYU_PAYMENT_SUCCESS', async (data) => {
        console.log('PAYU_PAYMENT_SUCCESS ======> ', data);
        resolve(data);
        PayuEvent.removeAllListeners(PAYU_PAYMENT_SUCCESS);
        PayuEvent.removeAllListeners(PAYU_PAYMENT_FAILED);
        let paymentData, merchantResponse, mainResponse;
        if (Platform.OS == 'android') {
          mainResponse = JSON.parse(data);
          paymentData = mainResponse.payUResponse;
          merchantResponse = mainResponse.merchantResponse;
        } else {
          mainResponse = data;
          paymentData = data.payUResponse;
          merchantResponse = data.merchantResponse;
        }
        if (paymentData.status == 'success') {
          callback(paymentData);
        } else {
          AppOkAlert('Something went wrong', () => {
            //navigation.pop();
          });
        }
      });
      PayuEvent.addListener('PAYU_PAYMENT_FAILED', async (data) => {
        console.log('PAYU_PAYMENT_FAILED ======> ', data);
        reject({success: false});
        PayuEvent.removeAllListeners(PAYU_PAYMENT_SUCCESS);
        PayuEvent.removeAllListeners(PAYU_PAYMENT_FAILED);
        // AppOkAlert('Something went wrong', () => {
        //   //navigation.pop();
        // });
      });
      PayUBiz.makePayment(paymentValues);
    });
  }else {
    AppOkAlert('Something went wrong.', () => {
      //navigation.pop();
    });
  }

 
};

export default DeviceHelper;
