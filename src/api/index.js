// import ApiClient from "./ApiClient";\
import ApiClient from "./ApiClient";
import UserAPI from "./UserApi";

export const apiClient = new ApiClient();

const combinedAPI = {
    user: new UserAPI(apiClient),
    // master: new MasterAPI(apiClient),
  
  };

export default combinedAPI;