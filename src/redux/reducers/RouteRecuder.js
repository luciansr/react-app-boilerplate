import { CHANGE_ROUTE } from '../actions/ActionTypes';

const initialState = {
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_ROUTE:
            return {
                ...state
            };
        default:
            return state;
    }
};