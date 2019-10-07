import axios from "axios";

const VEHICLE_API_BASE_URL = "https://swapi.co/api/vehicles/";
const VEHICLE_SEARCH_API_BASE_URL ="https://swapi.co/api/vehicles?search=Sand";

class ApiService {
  fetchVehicles() {
    return axios(VEHICLE_API_BASE_URL, {
      method: "GET",
      mode: "no-cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      },
      withCredentials: true,
      credentials: "same-origin"
    });
  }
  searchVehicles() {
    return axios(VEHICLE_SEARCH_API_BASE_URL, {
      method: "GET",
      mode: "no-cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      },
      withCredentials: true,
      credentials: "same-origin"
    });
  }
}

export default new ApiService();
