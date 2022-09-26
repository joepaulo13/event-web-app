import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_DOMAIN ? process.env.REACT_APP_API_DOMAIN : 'http://localhost:8080/testApp/';

const ApiClient=()=> {
    let axiosInstance;
    axiosInstance = axios.create({ baseURL : BASE_URL});
    return axiosInstance
}

export default ApiClient
