import { ADD, DECREMENT, DELETE, INCREMENT, MOUNT, UPDATE } from "../type/TypeFun"

export const IcreamentFun = (state)=> {
    return (dispatch)=> {
        dispatch({
            type : INCREMENT,
            count : state
        })
    }
}
export const DecreamentFun = (state)=> {
    return (dispatch)=> {
        dispatch({
            type : DECREMENT,
            count : state
        })
    }
}
export const AddFunc = (obj,count)=> {
    return (dispatch)=> {
        dispatch({
            type : ADD,
            obj : obj,
            count : count
        })
    }
}
export const DeleteFun = (id)=> {
    console.log(id)
    return (dispatch)=> {
        dispatch({
            type : DELETE,
            id : id
        })
    }
}
export const editFun = (id,obj)=> {
    console.log(id)
    return (dispatch)=> {
        dispatch({
            type : UPDATE,
            id : id,
            obj,obj
        })
    }
}

export const mountingFunc = (setCount)=> {
  
    return (dispatch)=> {
        dispatch({
            type : MOUNT,
            setCount : setCount,
        })
    }
}