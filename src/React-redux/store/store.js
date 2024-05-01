import { applyMiddleware, createStore } from "redux";
import { GetAllReducer } from "../reducer/GetAllReducer";
import { thunk } from "redux-thunk";


export const store = createStore(GetAllReducer,applyMiddleware(thunk));