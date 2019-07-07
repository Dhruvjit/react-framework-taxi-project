import { APIConstants } from "../constants/APIConstants";

class UtilServer {
  getApi(api) {
    return fetch(APIConstants.ServerAPI + api)
      .then(response => response.json())
      .catch(error => console.log(error));
  }
}

export const utilServer = new UtilServer();
