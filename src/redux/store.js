import { combineReducers, createStore } from "redux";
import { cartreducer } from "./reducers/reducer";

const rootreducer = combineReducers({
    cart:cartreducer
});

const store = createStore(
    rootreducer
);


export default store;