import { GET_AUTH_TOKEN } from '../actions/ActionTypes';

const initialState = {
    user: undefined,
    authToken: undefined
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_AUTH_TOKEN:
            console.log(action);
            //saveAuthToken(action.payload);
            return {
                ...state,
                user: action.payload
            };
        default:
            return state;
    }
};