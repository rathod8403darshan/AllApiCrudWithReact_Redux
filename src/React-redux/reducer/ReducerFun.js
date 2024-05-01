import { ADD, ADDAPI, DECREMENT, DELETE, DELETEAPI, INCREMENT, MOUNT, MOUNTAPI, UPDATE, UPDATEAPI } from "../type/TypeFun"

const stateObj = {
    count: 0,
    arr: [],
}

export const reucerFun = (state = stateObj, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                count: state.count + 1
            }
        case DECREMENT:
            return {
                count: state.count - 1
            }
        default:
            return state
    }
}

export const reucerFun2 = (state = stateObj, action) => {
    // console.log(action);
    switch (action.type) {
        case ADD:
            state.arr.push(action.obj);
            localStorage.setItem("arr", JSON.stringify(state));
            localStorage.setItem("count", JSON.stringify(action.count));
            return {
                arr: [...state.arr]
            }
        case DELETE:
            state.arr.splice(action.id, 1);
            localStorage.setItem("arr", JSON.stringify(state));

            return {
                arr: [...state.arr]
            }
        case UPDATE:
            console.log(action.id)
            state.arr.splice(action.id, 1, action.obj);
            localStorage.setItem("arr", JSON.stringify(state));

            return {
                arr: [...state.arr]
            }
        case MOUNT:
           const storedArr = JSON.parse(localStorage.getItem("arr")) || { arr: [] };
           const count = JSON.parse(localStorage.getItem("count"));
           action.setCount(count)
            return {
                ...state,
                arr: storedArr.arr || []
            }
           
            
            // return {
            //     arr: state.arr
            // }
        default:
            return {
                count: state.count,
                arr: [...state.arr]
            }
    }
}




