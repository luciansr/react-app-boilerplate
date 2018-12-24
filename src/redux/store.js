
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer'

const initialState = {};
const middleware = [thunk];

const store = createStore(
    rootReducer, 
    initialState, 
    process.env.NODE_ENV == `development` ? 
        compose(
            applyMiddleware(...middleware),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        ): applyMiddleware(...middleware)
    );
export default store;