import { GETAPITOKEN } from "../type/TypeFun";


const DefaultState = {
    TokenApi : []
}

export const reucerFun4 = (state=DefaultState,action)=> {
    switch (action.type) {
        case GETAPITOKEN:
            return{
                TokenApi : action.data
            };
    
        default:
            return state
    }
}