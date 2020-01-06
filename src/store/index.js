import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import LoginReducer from '../components/Login/reducer'

const reducers = combineReducers({
    LoginReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware()));


export default store;


