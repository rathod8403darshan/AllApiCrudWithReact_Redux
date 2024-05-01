import axios from "axios"
import { GETAPIPRODUCT } from "../type/TypeFun"


export const ProductApiFun = ()=> {
    return (dispatch)=> (
        axios.get("https://student-api.mycodelibraries.com/api/product/get").then((response)=>{
            dispatch({
                type: GETAPIPRODUCT,
                stateData:response.data.data
            })
            console.log(response.data.data)
        })
    )
}

export const AddProductApiFun = (obj)=> {
    return (dispatch)=> (
        axios.post("https://student-api.mycodelibraries.com/api/product/add",obj).then((response)=>{
            dispatch(
                ProductApiFun()
            )
        })
    )
}

export const DeleteProductApiFun = (id)=> {
    return (dispatch)=> (
        axios.delete("https://student-api.mycodelibraries.com/api/product/delete?id="+id).then((response)=>{
            dispatch(
                ProductApiFun()
            )
        })
    )
}


export const EditProductApiFun = (obj)=> {
    return (dispatch)=> (
        axios.post("https://student-api.mycodelibraries.com/api/product/update",obj).then((response)=>{
            dispatch(
                ProductApiFun()
            )
        })
    )
}