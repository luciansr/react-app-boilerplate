import { GET_AUTH_TOKEN, LOGOUT_USER, createAction } from './ActionTypes';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;
const ACCESS_TOKEN_KEY = process.env.REACT_APP_ACCESS_TOKEN_KEY;

export const getAuthToken = (username, password) => dispatch => {
    axios.post(`${API_URL}/auth/token?username=${username}&password=${password}`, null)
        .then(data =>  { 
            localStorage.setItem(ACCESS_TOKEN_KEY, data.data);
            dispatch(createAction(GET_AUTH_TOKEN, data))
        } );
}

export const logoutUser = () => dispatch => {
    localStorage.clear();
    dispatch(createAction(LOGOUT_USER));
}
