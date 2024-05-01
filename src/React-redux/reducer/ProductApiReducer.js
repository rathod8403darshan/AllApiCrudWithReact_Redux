import { GETAPIPRODUCT } from "../type/TypeFun";

const defaultState = {
    productApi : [],
}

export const ProductApiReducer = (state=defaultState,action)=> {
    switch (action.type) {
        case  GETAPIPRODUCT:
            console.log(action.stateData)
            return {
                productApi: action.stateData
            } 

            default : 
            return state

    }
}