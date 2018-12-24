import { SUBMIT_LOGIN, GET_AUTH_TOKEN } from './actionTypes';
import axios from 'axios';
const API_URL = process.env.REACT_APP_API_URL

export const getAuthToken = (username, password) => dispatch => {
    axios.post(`${API_URL}/auth/token?username=${username}&password=${password}`, null)
        .then(data => dispatch({
            type: GET_AUTH_TOKEN,
            payload: data
        }));
}