
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers'

const initialState = {};
const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    process.env.NODE_ENV === `development` && window.__REDUX_DEVTOOLS_EXTENSION__ ?
        compose(
            applyMiddleware(...middleware),
            window.__REDUX_DEVTOOLS_EXTENSION__()
        ) : applyMiddleware(...middleware)
);

export default store;