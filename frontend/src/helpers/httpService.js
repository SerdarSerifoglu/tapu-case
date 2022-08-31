import axios from "axios";

const httpService = axios.create();
httpService.defaults.baseURL = "http://localhost:3000/";

export default httpService;
