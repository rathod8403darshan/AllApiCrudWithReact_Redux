import axios from "axios"
import { ADDAPI, DELETEAPI, GETAPI, UPDATEAPI } from "../type/TypeFun"

export const ApiGetFun = () => {
    return (dispatch) => {
        axios.get("https://student-api.mycodelibraries.com/api/user/get").then((res) => {
            dispatch({
                type: GETAPI,
                data: res.data.data
            })
        })

    }
}
export const ApiAddFun = (data) => {
    return (dispatch) => {
        axios.post("https://student-api.mycodelibraries.com/api/user/add", data).then((res) => {
            dispatch(ApiGetFun());
            console.log(res)
        })
    }

}

export const ApiupdateFun = (id, obj) => {
    return (dispatch) => {
        axios.post("https://student-api.mycodelibraries.com/api/user/update", obj).then((res) => {
            dispatch(ApiGetFun());
        })
    }
}

export const ApiDeleteFun = (id) => {
    return (dispatch) => {
        axios.delete("https://student-api.mycodelibraries.com/api/user/delete?id=" + id).then((res) => {
            dispatch(ApiGetFun());
        })
    }
}


// export const ApiDeleteFun = (id) => {
//     // return (dispatch)=> {
//     //     dispatch({
//     //         type : DELETEAPI,
//     //         id:id,
//     //     })
//     // }
// }

// export const ApiAddFun = (data) => {
//     return (dispatch) => {
//         //     dispatch({
//         //         type : ADDAPI,
//         //         data:data,
//         //     })
//     }

// export const ApiupdateFun = (id, obj) => {
//     //         return (dispatch)=> {
//     //             dispatch({
//     //                 type : UPDATEAPI,
//     //                 id:id,
//     //                 obj:obj
//     //             })
//     //         }
// }