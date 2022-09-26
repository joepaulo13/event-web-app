import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_DOMAIN ? process.env.REACT_APP_API_DOMAIN : 'https://rjj-event-application.herokuapp.com/testApp/';

const ApiClient=()=> {
    let axiosInstance;
    axiosInstance = axios.create({ baseURL : BASE_URL});
    return axiosInstance
}

export default ApiClient
