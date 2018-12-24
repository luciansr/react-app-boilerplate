import { SUBMIT_LOGIN, GET_AUTH_TOKEN } from '../actions/actionTypes';

const initialState = {
    user: undefined
};

export default (state = initialState, action) => {
    switch (action.type) {
        // case SUBMIT_LOGIN:
        //     break;
        case GET_AUTH_TOKEN:
            return {
                ...state,
                user: action.payload
            };
        default:
            return state;
    }
};