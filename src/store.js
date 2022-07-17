import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import {dataReducer} from './redux/reducer';
import dataSlice from "./slice/dataSlice";

const reducer = combineReducers({
    dataReducer,
    dataSlice
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(thunk),
    ),
);

export default store;
