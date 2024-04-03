import Base from "./BaseApi";

export default class UserAPI extends Base {
  captchaImg() {
    return this.apiClient.get(null, "sahiya-login/captcha/captchaImg");
  }
  signIn(intl, params, data) {
    return this.apiClient.postParamsPayload(
      intl,
      "sahiya-login/login/signin",
      params,
      data
    );
  }

  //logout api
  //https://japitdev.dhanushinfotech.com/sahiya-login/login/logout?userId=1
  logout(intl, params, data) {
    return this.apiClient.postParamsPayload(
      null,
      `sahiya-login/login/logout`,
      params,
      data
    );
  }

  //https://japitdev.dhanushinfotech.com/sahiya-de/api/user/getbyid/1047655
  //sahiya-de/user/getbyid
  getProfileById(id) {
    return this.apiClient.get(null, `sahiya-de/api/user/getbyusercode/${id}`);
  }

  //https://japitdev.dhanushinfotech.com/sahiya-masters/api/anganwadi/getbyusercode/36262603
  getAnganwadisMastersByCode(userCode) {
    return this.apiClient.get(
      null,
      `sahiya-masters/api/anganwadi/getbyusercode/${userCode}`
    );
  }
  createsahiyaprofile(intl, params, data) {
    return this.apiClient.postParamsPayload(
      intl,
      "sahiya-de/api/user/save",
      params,
      data
    );
  }

  //sahiya-de/api/user/getall
  //return this.apiClient.post(null,`sahiya-sangi/api/list/getsahiyalist`,payload);

  getSahiyaList(intl, params, payload) {
    return this.apiClient.postParamsPayload(
      null,
      `sahiya-utility/api/user/getall`,
      params,
      payload
    );
    console.log("getall>>", JSON.stringify(payload));
  }

  //based on location get sahiya list
  getSahiyaListByLocation(intl, payload) {
    return this.apiClient.post(
      null,
      `sahiya-de/api/stats/getallservicesdata`,
      payload
    );
    console.log("getallservicesdata>>", JSON.stringify(payload));
  }

saveDeliveryDetailsReg(intl,params,data){
  return this.apiClient.postParamsPayload(
    intl,
    "sahiya-de/api/delivery/save",
    params,
    data
  );
}


savePregnantWomenReg(intl,params,data){
  return this.apiClient.postParamsPayload(
    intl,
    "sahiya-de/api/pw/save",
    params,
    data
  );
}
  //based on location get services status
  //https://japitdev.dhanushinfotech.com/sahiya-utility/api/approval/servicesstatus
  getAllServicesListStatus(payload) {
    return this.apiClient.post(
      null,
      `sahiya-utility/api/approval/servicesstatus`,
      payload
    );
  }

  saveFamilyReg(intl, params, data) {
    return this.apiClient.postParamsPayload(
      intl,
      "sahiya-de/api/family/save",
      params,
      data
    );
  }

  savePregnantWomenReg(intl, params, data) {
    return this.apiClient.postParamsPayload(
      intl,
      "sahiya-de/api/pw/save",
      params,
      data
    );
  }

saveAncReg(intl, params, data) {
    return this.apiClient.postParamsPayload(
      intl,
      "sahiya-de/api/anc/save",
      params,
      data
    );
  }

  saveEligibleCoupleReg(intl, params, data) {
    return this.apiClient.postParamsPayload(
      intl,
      "sahiya-de/api/ec-reg/save",
      params,
      data
    );
  }

  saveEligibleCoupleTrackingReg(intl, params, data) {
    return this.apiClient.postParamsPayload(
      intl,
      "sahiya-de/api/ec-tracking/save",
      params,
      data
    );
  }

  saveChildBirthReg(intl, params, data) {
    return this.apiClient.postParamsPayload(
      intl,
      "sahiya-de/api/child-reg/save",
      params,
      data
    );
  }

  saveChildVaccinationReg(intl, params, data) {
    return this.apiClient.postParamsPayload(
      intl,
      "sahiya-de/api/child-vaccination/save",
      params,
      data
    );
  }

  saveChildDeathReg(intl, params, data) {
    return this.apiClient.postParamsPayload(
      intl,
      "sahiya-de/api/death-reg/save",
      params,
      data
    );
  }

  saveHbycReg(intl, params, data) {
    return this.apiClient.postParamsPayload(
      intl,
      "sahiya-de/api/hbyc/save",
      params,
      data
    );
  }

  saveHbncReg(intl, params, data) {
    return this.apiClient.postParamsPayload(
      intl,
      "sahiya-de/api/hbnc/save",
      params,
      data
    );
  }

  saveAprReg(intl, params, data) {
    return this.apiClient.postParamsPayload(
      intl,
      "sahiya-de/api/apr/save",
      params,
      data
    );
  }
  saveAprRegNew(intl, params, data) {
    return this.apiClient.postParamsPayload(
      intl,
      "sahiya-de/api/apr-new/save",
      params,
      data
    );
  }

  saveMprReg(intl, params, data) {
    return this.apiClient.postParamsPayload(
      intl,
      "sahiya-de/api/mpr/save",
      params,
      data
    );
  }
  saveMprRegNew(intl, params, data) {
    return this.apiClient.postParamsPayload(
      intl,
      "sahiya-de/api/mpr-new/save",
      params,
      data
    );
  }

  savePlaReg(intl, params, data) {
    return this.apiClient.postParamsPayload(
      intl,
      "sahiya-de/api/plameeting/save",
      params,
      data
    );
  }

  saveVhsncReg(intl, params, data) {
    return this.apiClient.postParamsPayload(
      intl,
      "sahiya-de/api/vhsnc/save",
      params,
      data
    );
  }

  getFamilyListById(params) {
    return this.apiClient.get(
      null,
      `sahiya-de/api/family/getallbyusercode`,
      params
    );
  }
  getHbycListById(params) {
    return this.apiClient.get(
      null,
      `sahiya-de/api/hbyc/getallbyusercode`,
      params
    );
  }
  getEcListById(params) {
    return this.apiClient.get(
      null,
      `sahiya-de/api/ec-reg/getallbyusercode`,
      params
    );
  }
  getEcTrackingListById(params) {
    return this.apiClient.get(
      null,
      `sahiya-utility/api/ect/getallbyusercode`,
      params
    );
  }
  getBirthListById(params) {
    return this.apiClient.get(
      null,
      `sahiya-de/api/child-reg/getallbyusercode`,
      params
    );
  }
  getDeathListById(params) {
    return this.apiClient.get(
      null,
      `sahiya-de/api/death-reg/getallbyusercode`,
      params
    );
  }
  getChildVaccListById(params) {
    return this.apiClient.get(
      null,
      `sahiya-de/api/child-vaccination/getallbyusercode`,
      params
    );
  }
  getHbycListById(params) {
    return this.apiClient.get(
      null,
      `sahiya-de/api/hbyc/getallbyusercode`,
      params
    );
  }
  getHbncListById(params) {
    return this.apiClient.get(
      null,
      `sahiya-de/api/hbnc/getallbyusercode`,
      params
    );
  }
  getMprListById(params) {
    return this.apiClient.get(
      null,
      `sahiya-de/api/mpr/getallbyusercode`,
      params
    );
  }

  getAprListById(params) {
    return this.apiClient.get(
      null,
      `sahiya-utility/api/apr-new/getallbyusercode`,
      params
    );
  }

  //https://japitdev.dhanushinfotech.com/sahiya-utility/api/apr-new/getby-usercodeandmonth?userCode=13896
  getAprListByIdMonth(intl, params, data) {
    return this.apiClient.postParamsPayload(
      intl,
      `sahiya-utility/api/apr-new/getby-usercodeandmonth`,
      params,
      data
    );
  }
  
  
  
  getPlaListById(params) {
    return this.apiClient.get(
      null,
      `sahiya-de/api/plameeting/getallbyusercode`,
      params
    );
  }

  getPwListById(params) {
    return this.apiClient.get(
      null,
      `sahiya-utility/api/pw/getallbyusercode`,
      params
    );
  }

  getAncListById(params) {
    return this.apiClient.get(
      null,
      `sahiya-utility/api/anc/getallbyusercode`,
      params
    );
  }

  getDeliveryListById(params){
    return this.apiClient.get(
      null,
      `sahiya-utility/api/delivery/getallbyusercode`,
      params
    );
  }

  //https://japitdev.dhanushinfotech.com/sahiya-de/api/approve/user?userCode=206701
  sendProfileApproval(intl, params, data) {
    return this.apiClient.postParamsPayload(
      intl,
      `sahiya-de/api/approve/profile`,
      params,
      data
    );
  }

  //https://japitdev.dhanushinfotech.com/sahiya-de/api/approve/service?userCode=206701
  sendFormApproval(intl, params, data) {
    return this.apiClient.postParamsPayload(
      intl,
      `sahiya-de/api/approve/service`,
      params,
      data
    );
  }

  doResetPassword(payload) {
    return this.apiClient.post(null, `sahiya-login/login/resetpwd`, payload);
  }

  
}
