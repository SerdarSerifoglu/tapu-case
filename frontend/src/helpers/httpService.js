import axios from "axios";

const httpService = axios.create();
httpService.defaults.baseURL = "http://localhost:3001/";

export default httpService;
