import {GETAPISTUDENT } from "../type/TypeFun"

const defaultState = {
    students:[],
}

export const StudentApiReducer = (state=defaultState,action)=> {
    switch (action.type) {
        case GETAPISTUDENT:
            return {
                students : action.data
            }
        default :
        return state
}
}