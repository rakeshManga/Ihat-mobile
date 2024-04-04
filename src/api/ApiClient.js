import queryString from 'query-string';
import { isObject } from 'formik';
import { isNullOrUndefined } from 'util';
import Config from 'react-native-config';
import DeviceHelper from '../utils/DeviceHelper';
import { getJwtToken, setJwtToken } from '../utils/AsyncStorageHelper';
import PubSub from 'pubsub-js';
// import { TOKEN_EXPIRE } from '../route/RouteConst';

//export const API_BASE_URL = "https://vidmedplus.dhanushinfotech.com";

// export const API_BASE_URL = Config.API_URL; //"https://vidmed2.dhanushinfotech.com";
export const API_BASE_URL ="https://surveillance-qa.dhanushinfotech.com"; //"https://surveillance-qa.dhanushinfotech.com";
export const TENANT_ID = Config.TENANT_ID ? Config.TENANT_ID : undefined;
export const SEESION_EXPIRE =
  'Your session is expired. Please try to login again.';
export const NO_INTERNET_MSG =
  'No Internet connection. Make sure that Wi-Fi or mobile data is turned on,then try again';
export const REFREST_TOKEN_API = 'vidmed-login/nojwt/user/refreshToken';
export const DUPLICATE_USER =
  'You have already logged in another session or previous session was closed abruptly. Please try again.';

console.log("API_BASE_URLAPI_BASE_URL", API_BASE_URL);
export default class ApiClient {
  constructor(prefix = '/api') {
    this.prefix = API_BASE_URL;
  }

  get(requestUrl, params = {}) {
    return this.request({
      url: requestUrl,
      method: 'get',
      params,
    });
  }

  post(requestUrl, payload = {}) {
    return this.request({
      url: requestUrl,
      method: 'post',
      body: payload,
    });
  }

  postParamsPayload(requestUrl, payload = {}, params = {}) {
    return this.request({
      url: requestUrl,
      method: 'post',
      body: payload,
      params,
    });
  }
  postParams(requestUrl, params = {}) {
    return this.request({
      url: requestUrl,
      method: 'post',
      params,
    });
  }

  put(requestUrl, payload = {}) {
    return this.request({
      url: requestUrl,
      method: 'put',
      body: payload,
    });
  }

  patch(requestUrl, payload = {}) {
    return this.request({
      url: requestUrl,
      method: 'patch',
      body: payload,
    });
  }

  delete(requestUrl, params = {}) {
    return this.request({
      url: requestUrl,
      method: 'delete',
      params,
    });
  }

  upload(requestUrl, payload = {}, callback = () => { }) {
    return this.uploadFile({
      url: requestUrl,
      method: 'post',
      body: payload,
      callback: callback,
    });
  }

  uploadFile = async ({ url, method, params = {}, body, callback }) => {
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
    url = this.modifyUrl(url);
    const urlWithQuery = `${url}?${queryString.stringify(params)}`;
    console.log('urlWithQuery=======> ', urlWithQuery);
    console.log('body====>', body);
    let formdata = new FormData();
    formdata.append('fileTypeId', body.fileTypeId);
    formdata.append('reg_id', body.reg_id);
    formdata.append('file', body.file);
    formdata.append('screenName', body.screenName);
    if (!isNullOrUndefined(body.report_date)) {
      formdata.append('report_date', body.report_date);
    }
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
    xhr.onreadystatechange = async (e) => {
      //console.log("e===> ", xhr.status);
      if (xhr.readyState !== 4) {
        return;
      }
      let status = xhr.status;
      let msg = xhr.message;
      console.log('status :-', status);
      //console.log("res :-", xhr.response);
      if (status == 413) {
        callback({
          error: 'File Size too large.',
        });
        return;
      }
      if (status == 401) {
        PubSub.publish(TOKEN_EXPIRE, {
          tokenExpire: true,
        });
        callback({
          error: SEESION_EXPIRE,
          status: 401,
        });

        return;
        // const refreshTokenRes = await this.get(REFREST_TOKEN_API, {
        //         bearerStr: jwtToken
        // });
        // if(refreshTokenRes && refreshTokenRes.status == "success" && isObject(refreshTokenRes.response)){
        //     await setJwtToken(refreshTokenRes.response.token);
        //     this.uploadFile({
        //         url,
        //         method,
        //         params,
        //         body,
        //         callback
        //     })
        //     return;
        // }else {
        //     PubSub.publish(TOKEN_EXPIRE, {
        //         tokenExpire: true,
        //     });
        //     callback({
        //         error: SEESION_EXPIRE
        //     })
        //     return;
        // }
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

  modifyUrl(url) {
    if (this.prefix.includes('telemedicine-uk-qa') && !url.includes('vidmed-login') && !url.includes('telecon')) {
      url = url.includes('master') ? url : Config.PATH_URL + url;
    }
    return url;
  }

  uploadHandOverFile(requestUrl, payload = {}, callback = () => { }) {
    return this.uploadHandOver({
      url: requestUrl,
      method: 'post',
      body: payload,
      callback: callback,
    });
  }

  uploadHandOver = async ({ url, method, params = {}, body, callback }) => {
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
    // const urlWithQuery = `${url}?${queryString.stringify(params)}`;
    url = this.modifyUrl(url);

    const urlWithQuery = `${url}?${queryString.stringify(params)}`;
    console.log('urlWithQuery=======> ', urlWithQuery);
    console.log('body====>', body);
    let formdata = new FormData();
    formdata.append('fileTypeId', body.fileTypeId);
    formdata.append('reg_id', body.reg_id);
    formdata.append('file', body.file);
    formdata.append('screenName', body.screenName);
    formdata.append('isActive', body.isActive);
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = async (e) => {
      //console.log("e===> ", xhr.status);
      if (xhr.readyState !== 4) {
        return;
      }
      let status = xhr.status;
      let msg = xhr.message;
      console.log('status :-', status);
      //console.log("res :-", xhr.response);
      if (status == 413) {
        callback({
          error: 'File Size too large.',
        });
        return;
      }
      if (status == 401) {
        PubSub.publish(TOKEN_EXPIRE, {
          tokenExpire: true,
        });
        callback({
          error: SEESION_EXPIRE,
          status: 401,
        });

        return;
        // const refreshTokenRes = await this.get(REFREST_TOKEN_API, {
        //         bearerStr: jwtToken
        // });
        // if(refreshTokenRes && refreshTokenRes.status == "success" && isObject(refreshTokenRes.response)){
        //     await setJwtToken(refreshTokenRes.response.token);
        //     this.uploadFile({
        //         url,
        //         method,
        //         params,
        //         body,
        //         callback
        //     })
        //     return;
        // }else {
        //     PubSub.publish(TOKEN_EXPIRE, {
        //         tokenExpire: true,
        //     });
        //     callback({
        //         error: SEESION_EXPIRE
        //     })
        //     return;
        // }
      }
      if (status >= 500) {
        callback({
          error: 'Internal server error',
        });
        return;
      }
      if (xhr.response == '') {
        console.log('response =>:-', xhr.response);
        callback({
          error: 'Unable to upload file. Try Again later.',
        });
        return;
      }
      let res = JSON.parse(xhr.response);
      console.log(res);
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

  // ========================for hub==================>
  uploadHandOverFileInHub(requestUrl, payload = {}, callback = () => { }) {
    return this.uploadHandOverInHub({
      url: requestUrl,
      method: 'post',
      body: payload,
      callback: callback,
    });
  }

  uploadHandOverInHub = async ({ url, method, params = {}, body, callback }) => {
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
    // const urlWithQuery = `${url}?${queryString.stringify(params)}`;
    url = this.modifyUrl(url);

    const urlWithQuery = `${url}?${queryString.stringify(params)}`;
    console.log('urlWithQuery=======> ', urlWithQuery);
    console.log('body====>', body);
    let formdata = new FormData();
    formdata.append('fileTypeId', body.fileTypeId);
    formdata.append('reg_id', body.reg_id);
    formdata.append('file', body.file);
    formdata.append('screenName', body.screenName);
    formdata.append('isActive', body.isActive);
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = async (e) => {
      //console.log("e===> ", xhr.status);
      if (xhr.readyState !== 4) {
        return;
      }
      let status = xhr.status;
      let msg = xhr.message;
      console.log('status :-', status);
      //console.log("res :-", xhr.response);
      if (status == 413) {
        callback({
          error: 'File Size too large.',
        });
        return;
      }
      if (status == 401) {
        PubSub.publish(TOKEN_EXPIRE, {
          tokenExpire: true,
        });
        callback({
          error: SEESION_EXPIRE,
          status: 401,
        });

        return;
        // const refreshTokenRes = await this.get(REFREST_TOKEN_API, {
        //         bearerStr: jwtToken
        // });
        // if(refreshTokenRes && refreshTokenRes.status == "success" && isObject(refreshTokenRes.response)){
        //     await setJwtToken(refreshTokenRes.response.token);
        //     this.uploadFile({
        //         url,
        //         method,
        //         params,
        //         body,
        //         callback
        //     })
        //     return;
        // }else {
        //     PubSub.publish(TOKEN_EXPIRE, {
        //         tokenExpire: true,
        //     });
        //     callback({
        //         error: SEESION_EXPIRE
        //     })
        //     return;
        // }
      }
      if (status >= 500) {
        callback({
          error: 'Internal server error',
        });
        return;
      }
      if (xhr.response == '') {
        console.log('response =>:-', xhr.response);
        callback({
          error: 'Unable to upload file. Try Again later.',
        });
        return;
      }
      let res = JSON.parse(xhr.response);
      console.log(res);
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

  request = async ({ url, method, params = {}, body }) => {
    const isConnected = await DeviceHelper.isConnectedToInternet();
    if (!isConnected) {
      const res = {
        error: NO_INTERNET_MSG,
        message: NO_INTERNET_MSG,
        noInternet: true,
      };
      return res;
    }
    let showToast = params.showToast;
    if (TENANT_ID) {
      params = {
        ...params,
        TENANT_ID: TENANT_ID,
      };
    }
    url = this.modifyUrl(url);

    const urlWithQuery = `${url}?${queryString.stringify(params)}`;
    console.log('urlWithQuery=======> ', `${this.prefix}/${urlWithQuery}`);
    let headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    const jwtToken = await getJwtToken();
    if (jwtToken) {
      headers = {
        ...headers,
        Authorization: jwtToken,
      };
    }
    // console.log('headers : ', headers);
    const init = {
      method,
      headers: headers,
      //url: `${this.prefix}/${urlWithQuery}`
    };

    if (method !== 'get' && method !== 'head') {
      init.body = JSON.stringify(body);
      //init.data = body;
    }
    try {
      // console.log('init : ', init);
      let res = await fetch(`${this.prefix}/${urlWithQuery}`, init); //axios(init);

      let status = res.status;
      // let msg = res.message;
      if (status == 401) {
        if (
          urlWithQuery.includes('getallhospitalrecords') ||
          urlWithQuery.includes('vidmed-login/user/logout') ||
          (isNullOrUndefined(jwtToken) &&
            urlWithQuery.includes('vidmed-login/registration/jwt/beneficiary/web_list'))
        ) {
          return {
            ...res,
            error: SEESION_EXPIRE,
            message: SEESION_EXPIRE,
            status: 401,
          };
        }

        if (showToast != false) {
          // Toast.show(DUPLICATE_USER, Toast.LONG);
          console.log(DUPLICATE_USER);
        }
        PubSub.publish(TOKEN_EXPIRE, {
          tokenExpire: true,
        });
        return {
          ...res,
          error: SEESION_EXPIRE,
          message: SEESION_EXPIRE,
          status: 401,
        };
        // const refreshTokenRes = await this.get(REFREST_TOKEN_API, {
        //     bearerStr: jwtToken
        // });
        // console.log("refreshToken ************************* : ", refreshTokenRes);
        // if(refreshTokenRes && refreshTokenRes.status == "success" && isObject(refreshTokenRes.response)){
        //     console.log("refreshToken1 ************************* : ", refreshTokenRes);
        //     await setJwtToken(refreshTokenRes.response.token);
        //     this.request({
        //         url,
        //         method,
        //         params,
        //         body
        //     })
        //     return;
        // }else {
        //     console.log("refreshToken1 failed ************************* : ", refreshTokenRes);
        //     PubSub.publish(TOKEN_EXPIRE, {
        //         tokenExpire: true,
        //     });
        //     return {
        //         ...res,
        //         error:  SEESION_EXPIRE,
        //         message: SEESION_EXPIRE
        //     }
        // }
      }
      try {
        res = await res.json();
        //console.log('urlWithQuery=======> ', `${this.prefix}/${urlWithQuery}`);
      } catch (err) {
        res = await res.text();
        if (res == 'Success') {
          return { status: true };
        }
        // console.log('urlWithQuery=======> ', `${this.prefix}/${urlWithQuery}`);
        return res;
      }

      //console.log('response 1:- ', res);
      if (status >= 500) {
        //throw new Error('Bad response from server');
        res.error = res.message || 'Bad response from server';
      }
      if (status >= 400) {
        //throw new Error('Bad response from server');
        res.error = res.message || 'Bad Credentials';
      }

      if (res.status == 'failed') {
        res.error = `${res.response || res.message} ${res.httpStatus}`;
      }
      //console.log("response 2:- ", res);
      if (!res.error) {
        return res;
      } else {
        return res;
        //throw new Error(res.error);
      }
    } catch (err) {
      let res = {
        error: !isConnected ? NO_INTERNET_MSG : (err.message || "something went wrong."),
        message: !isConnected ? NO_INTERNET_MSG : (err.message || "something went wrong."),
      }
      return res;
    }
    //console.log("Request Data :- ", init)
  };
}
