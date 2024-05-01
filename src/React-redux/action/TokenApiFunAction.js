import axios from "axios"
import { GETAPITOKEN } from "../type/TypeFun"
export const token = { headers: { Authorization: "Bearer 0a5dd53d67b9ec24b96e00ff6013b569ff4240b133270a2b1d97716215a54507" } }



export const ApiGetFunToken = () => {
    return (dispatch) => {
        try {
            axios.get("https://gorest.co.in/public/v2/users",token).then((res) => {
                dispatch({
                    type: GETAPITOKEN,
                    data: res.data
                })
            })
        } catch (error) {
            console.log(error);
        }

    }
}


export const ApiAddFunToken = (obj) => {
    return (dispatch) => {
        try {
            axios.post("https://gorest.co.in/public/v2/users", obj,token).then((res) => {
                dispatch(ApiGetFunToken());
                console.log(res);
            })
        } catch (error) {
            console.log(error);
        }

    }
}



export const ApiDeleteFunToken = (id) => {
    return (dispatch) => {
        try {
            axios.delete("https://gorest.co.in/public/v2/users/"+id,token).then((res) => {
                dispatch(ApiGetFunToken());
            })
        } catch (error) {
            console.log(error);
        }

    }
}


export const ApieditFunToken = (obj,id) => {
    return (dispatch) => {
        try {
            axios.put("https://gorest.co.in/public/v2/users/"+id,obj,token).then((res) => {
                dispatch(ApiGetFunToken());
                console.log(res)
            })
        } catch (error) {
            console.log(error);
        }

    }
}


