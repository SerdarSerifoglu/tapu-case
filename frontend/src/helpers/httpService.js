import axios from "axios";

const httpService = axios.create();
httpService.defaults.baseURL = process.env.REACT_APP_PROJECT_API_URL;

export default httpService;
