import { isObject } from "formik";
import queryString from "query-string";
import Config from "react-native-config";
import DeviceHelper from "../utils/DeviceHelper"
import { getApiKey, getJwtToken } from "../Utils/AsyncStorageHelper";
//import sslPinning from 'react-native-ssl-pinning';
import { Alert } from "react-native";

//import { fetch } from "react-native-ssl-pinning";

export const API_BASE_URL = Config.API_URL;
export const TENANT_ID = Config.TENANT_ID ? Config.TENANT_ID : undefined;
// Define a list of domains or URLs for which SSL pinning should be disabled
//const domainsToDisableSSLFor = ['japitdev.dhanushinfotech.com', 'japitqa.dhanushinfotech.com'];

// Disable SSL pinning for the specified domains
// domainsToDisableSSLFor.forEach(domain => {
//   //sslPinning.(domain);
  
// });
// const certificate = require('../assets/mycert.cer');

 //sslPinning.addCertificate(certificate);
// Configure SSL pinning for a specific domain
const domain = 'https://japitstaging.dhanushinfotech.com';
const publicKeyHashes = ['47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU='];

export const API_STATUS = {
    NO_INTERNET: 'NO_INTERNET',
    BAD_REQUEST: 'BAD_REQUEST',
    SERVER_ERROR: 'SERVER_ERROR',
    CODE_ERROR: 'CODE_ERROR',
    OK: 'OK',
  };
  
  export const NO_INTERNET_MSG =
    'No Internet connection. Make sure that Wi-Fi or mobile data is turned on,then try again';


    export default class ApiClient {
        constructor(prefix = '/api') {
          this.prefix = API_BASE_URL;
        }
      
        get(intl, requestUrl, params = {}) {
          return this.request({
            intl: intl,
            url: requestUrl,
            method: 'get',
            params,
          });
        }
      
        getMasters(requestUrl) {
          return this.request({
            url: requestUrl,
            method: 'get',
          });
        }
      
        post(intl, requestUrl, payload = {}, isFormData) {
          return this.request({
            intl: intl,
            url: requestUrl,
            method: 'post',
            body: payload,
            isFormData,
          });
        }
      
        postParams(intl, requestUrl, params = {}) {
          return this.request({
            intl: intl,
            url: requestUrl,
            method: 'post',
            params,
          });
        }
        postTwoParams(requestUrl, params = {}) {
          return this.request({
            url: requestUrl,
            method: 'post',
            params,
          });
        }
      
        postParamsPayload(intl, requestUrl, params = {}, payload = {}) {
          return this.request({
            intl: intl,
            url: requestUrl,
            method: 'post',
            body: payload,
            params,
          });
        }
      
        put(intl, requestUrl, payload = {}) {
          return this.request({
            intl: intl,
            url: requestUrl,
            method: 'put',
            body: payload,
          });
        }
      
        patch(intl, requestUrl, payload = {}) {
          return this.request({
            intl: intl,
            url: requestUrl,
            method: 'patch',
            body: payload,
          });
        }
      
        delete(requestUrl,params={}) {
          return this.request({
            url:requestUrl,
            method:'delete',
            params,
          });
        }
      
        upload(intl, requestUrl, payload = {}, callback = () => {}) {
          return this.uploadFile({
            intl: intl,
            url: requestUrl,
            method: 'post',
            body: payload,
            callback: callback,
          });
        }
      
        uploadFile = async ({url, method, params = {}, body, callback}) => {
          // TODO function to upload files
          const isConnected = await DeviceHelper.isConnectedToInternet();
          const jwtToken = await getJwtToken();
        
          if (!isConnected) {
            const res = {
              error: NO_INTERNET_MSG,
              message: NO_INTERNET_MSG,
              noInternet: true,
            };
            return res;
          }
          if (TENANT_ID) {
            params = {
              ...params,
              TENANT_ID: TENANT_ID,
            };
          }
          let file = body.file;
          file = {
            ...file,
            //name: `${Config.ORG_NAME}.${getFileExtension(file.name)}`
          };
          body = {
            ...body,
            file: file,
          };
          const urlWithQuery = API_BASE_URL+'/'+`${url}?${queryString.stringify(params)}`;
          console.log('urlWithQuery=======> ', urlWithQuery);
          console.log('body====>', body);
          let formdata = new FormData();
          formdata.append('fileTypeId', body.fileTypeId);
          formdata.append('reg_id', body.reg_id);
          formdata.append('file', body.file);
          formdata.append('screenName', body.screenName);
          if (!isNullOrUndefined(body.consultation_id)) {
            formdata.append('consultation_id', body.consultation_id);
          }
          if (!isNullOrUndefined(body.patient_vital_id)) {
            formdata.append('patient_vital_id', body.patient_vital_id);
          }
          formdata.append('isActive', body.isActive);
          formdata.append('latitude', body.latitude);
          formdata.append('longitude', body.longitude);
          let xhr = new XMLHttpRequest();
          xhr.onreadystatechange = async e => {
            
            if (xhr.readyState !== 4) {
              return;
            }
            let status = xhr.status;
            let msg = xhr.message;
            console.log('status :-', status);
           
            if (status == 413) {
              callback({
                error: 'File Size too large.',
              });
              return;
            }
            if (status == 401) {
            //   PubSub.publish(TOKEN_EXPIRE, {
            //     tokenExpire: true,
            //   });
             
      
              return;
              
            }
            if (status >= 500) {
              callback({
                error: 'Internal server error',
              });
              return;
            }
            if (xhr.response == '') {
              callback({
                error: 'Unable to upload file. Try Again later.',
              });
              return;
            }
            let res = JSON.parse(xhr.response);
            //console.log(typeof res);
            console.log('res :-', res);
            if (res.status == 'failed') {
              //console.log("res 3:-");
              res.error = `${res.response || res.message} ${res.httpStatus}`;
            }
            if (status >= 500) {
              //throw new Error('Bad response from server');
              //console.log("res 1:-");
              res.error = res.message || 'Bad response from server';
            }
            if (status >= 400) {
              //throw new Error('Bad response from server');
              //console.log("res 2:-");
              res.error = res.message || 'Bad Credentials';
            }
      
            if (
              (res.status == 'success' || res.status == 'OK') &&
              isObject(res.response)
            ) {
              //console.log("res 4:-");
              return callback({
                status: 'success',
                response: res.response,
                httpStatus: res.httpStatus,
              });
            } else {
              //console.log("res else:-");
              return callback({
                error: res.error || 'Something went wrong',
              });
            }
          };
          xhr.open('POST', `${this.prefix}/${urlWithQuery}`);
          xhr.setRequestHeader('Content-type', 'multipart/form-data');
          if (jwtToken) {
            xhr.setRequestHeader('Authorization', jwtToken);
          }
          xhr.send(formdata);
        };
      
        request = async ({
          intl,
          url,
          method,
          params = {
            TENANT_ID: Config.TENANT_ID,
          },
          body,
          isFormData,
        }) => {

          let isConnected = await DeviceHelper.isConnectedToInternet();
          if (!isConnected) {
            const res = {
              message: NO_INTERNET_MSG,
              error: NO_INTERNET_MSG,
              noIntenet: true,
              status: API_STATUS.NO_INTERNET,
            };
            return res;
          }
      
        const urlWithQuery = `${this.prefix}/${url}?${queryString.stringify(
            params,
          )}`;
          console.log('urlWithQuery=======> ', urlWithQuery);
      
        const jwtToken = await getJwtToken();
         //const jwtToken=undefined;
      
          console.log('jwt token===========>', JSON.parse(jwtToken));
      
         const apiKey = await getApiKey();
         //const apiKey=undefined;
          let headers = {
            Accept: "application/json; charset=utf-8", "Access-Control-Allow-Origin": "*", "e_platform": "mobile",
          //   sslPinning: {
          //     certs: ["mycert","mycert2"]
          // }
             //Accept: 'application/json',
            'content-type': isFormData ? 'multipart/form-data' : 'application/json',
            //added by naresh
            'Cache-Control': 'no-cache, no-store, must-revalidate',
            'Pragma': 'no-cache',
            'Expires': 0
          };
          if (jwtToken) {
            headers = {
              ...headers,
              Authorization: JSON.parse(jwtToken),
              //'x-api-key': apiKey,
              
            };
          }
          let init = {
            method,
            headers: headers,
          };
      
          if (method !== 'get' && method !== 'head') {
            if (isFormData) {
              init.body = body;
            } else {
              if (typeof body == 'string') {
                init.body = body;
                headers = {
                  ...headers,
                  'content-type': 'text/plain',
                };
                init = {
                  ...init,
                  headers,
                };
              } else {
                init.body = JSON.stringify(body);
              }
            }
            //init.body = JSON.stringify(body);
            //init.data = body;
          }
          console.log('headers : ', headers);
      
          console.log(init);
          try {
          //  sslPinning.pin({domain,certs}).then(()=>{
          //    Alert.alert('ccc');
          //  }).catch((error) => {
          //   console.error('SSL pinning configuration failed:', error);
          // });
            let res = await fetch(urlWithQuery, init);
            let status = res.status;
            let response;
            try {
              if (status == 401) {
                
                // PubSub.publish(TOKEN_EXPIRE, {
                //   tokenExpire: true,
                // });
                if(isConnected){
                let newRes = {
                  ...response,
                  message: 'Another User Logged In Another Device',
                };
                return newRes;
              }
              if(!isConnected){
                let newRes2 = {
                  ...response,
                  message: 'No Internet Connection',
                };
                return newRes2;
              }
              }
              try{
              response = await res.json();
                
            }catch(e){
              res = await res.text();
              if (res == 'Success') {
                return {status: true};
              }
             // console.log('urlWithQuery=======> ', `${this.prefix}/${urlWithQuery}`);
              return res;
              }
              console.log('response 1:- ', response);
              if (typeof response == 'object' || Array.isArray(response) || typeof response == 'string') {
                res = response;
                return res;
              } else if (res.status == 200) {
                res = {
                  message: response,
                  status: API_STATUS.OK,
                  data: response,
                };
                return res;
              }
      
              if (status >= 500) {
                //throw new Error('Bad response from server');
                res = {
                  //...res,
                  message: response || 'Bad response from server',
                  status: API_STATUS.SERVER_ERROR,
                };
                return res;
              }
              if (status == 404) {
                //throw new Error('Bad response from server');
                //res.error = res.message || 'Bad Credentials';
                res = {
                  //...res,
                  message: response || 'Bad Credentials',
                  status: API_STATUS.BAD_REQUEST,
                };
                return res;
              }
              if (status >= 400) {
                //throw new Error('Bad response from server');
                //res.error = res.message || 'Bad Credentials';
                res = {
                  //...res,
                  message: response || 'Bad Credentials',
                  status: API_STATUS.BAD_REQUEST,
                };
                // PubSub.publish(TOKEN_EXPIRE, {
                //   tokenExpire: true,
                // });
                //navigationRef.navigate(LOGIN_PAGE);
                return res;
              }
      
              if (res.status == 'failed') {
                //res.error = `${res.response || res.message} ${res.httpStatus}`;
                res = {
                  //...res,
                  message: response || 'Bad Credentials',
                  status: API_STATUS.BAD_REQUEST,
                };
                return res;
              }
      
              return res;
            } catch (err) {
             
              const res = {
                //message: "We are unable to process your request at this moment.Please try again later",
                message: 'Something went wrong.',
                status: API_STATUS.CODE_ERROR,
              };
      
              //AppOkAlert('Another User logged in another device',()=>{});
              return res;
            }
          } catch (err) {
            //alert(err);
          
            let res='';
        //     let name = RootNavigation.navigationRef.getCurrentRoute().name;
        //    if(name!=PATIENT_LIST_PAGE){
        //     if(err.message=='Network request failed'){
        //       res = {
        //         //message: "We are unable to process your request at this moment. .Please try again later",
        //         message: 'No Internet Connection',
        //         status: API_STATUS.CODE_ERROR,
        //     };
        //       return res;
        //     }
           
            if(isConnected){
             res = {
              //message: "We are unable to process your request at this moment. .Please try again later",
              message: 'Another User logged in another device',
              status: API_STATUS.CODE_ERROR,
            };
            return res;
        //   }else{
        //     res = {
        //       //message: "We are unable to process your request at this moment. .Please try again later",
        //       message: 'No Internet Connection',
        //       status: API_STATUS.CODE_ERROR,
        //   };
        //     return res;
        //   }
           }
           return;
        }
        };
      }