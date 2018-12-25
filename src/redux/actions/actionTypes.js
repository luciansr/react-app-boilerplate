export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
//auth
export const GET_AUTH_TOKEN = 'GET_AUTH_TOKEN';
export const LOGOUT_USER = 'LOGOUT_USER';

export const createAction = (action_type, payload) => {
    return {
        type: action_type,
        payload : payload
    };
}