import { combineReducers } from "redux";
import { reucerFun, reucerFun2 } from "./ReducerFun";
import { reucerFun3 } from "./APiReducer";
import { reucerFun4 } from "./TokenApiReducer";
import { ProductApiReducer } from "./ProductApiReducer";
import { StudentApiReducer } from "./StudentApiReducer";


export const GetAllReducer = combineReducers({
    count : reucerFun,
    arr : reucerFun2,
    api : reucerFun3,
    apiToken : reucerFun4,
    apiProduct: ProductApiReducer,
    apiStudent:StudentApiReducer
})