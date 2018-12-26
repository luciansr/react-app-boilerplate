import axios from 'axios';
import { logoutUser } from '../redux/actions/AuthActions';

const ACCESS_TOKEN_KEY = process.env.REACT_APP_ACCESS_TOKEN_KEY;
const AUTH_TOKEN_PREFIX = process.env.REACT_APP_AUTH_TOKEN_PREFIX;

export default {
    setupInterceptors: (store) => {
        // Add a request interceptor
        axios.interceptors.request.use(function (config) {
            // Do something before request is sent
            var accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);
            if (accessToken) {
                config.headers = {
                    Authorization: `${AUTH_TOKEN_PREFIX} ${accessToken}`
                };
            }
            return config;
        }, function (error) {
            // Do something with request error
            return Promise.reject(error);
        });

        // Add a response interceptor
        axios.interceptors.response.use((response) => {
            // console.log(response);
            return response;
        }, (error) => {
            console.log(error);
            if (error.response.status === 401
                || error.response.status === 403) {
                store.dispatch(logoutUser());
            }
            //catches if the session ended!
            if (error.response.data.token.KEY === 'ERR_EXPIRED_TOKEN') {
                console.log("EXPIRED TOKEN!");
                store.dispatch(logoutUser());
            }
            return Promise.reject(error);
        });
    }
};