import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/index";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension'

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;

// const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
