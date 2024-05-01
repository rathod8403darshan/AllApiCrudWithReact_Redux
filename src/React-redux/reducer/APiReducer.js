import axios from "axios"
import { ADDAPI, DELETEAPI, GETAPI, MOUNTAPI, UPDATEAPI } from "../type/TypeFun"


// const GetFunction = async () => {
//     try {
//         return await axios.get("https://student-api.mycodelibraries.com/api/user/get").then((res) => {
//             return res.data.data
//         })
//     }
//     catch (error) {
//         console.log(error)
//     }
// }

const defaultState = {
    api: [],
}
export const reucerFun3 = async (state = defaultState, action) => {

    switch (action.type) {
        case GETAPI:

        // console.log(action.data)
         return {
             api: [...action.data]
         }
        // case ADDAPI:
            // return axios.post("https://student-api.mycodelibraries.com/api/user/add", action.data).then((res) => {
            //     return GetFunction();
            // })

        // case DELETEAPI:

        //     return {
        //         api: await axios.delete("https://student-api.mycodelibraries.com/api/user/delete?id=" + action.id).then(async (res) => {
        //             return await GetFunction()
        //         })

        //     }
        // case UPDATEAPI:
        //     api: await axios.post("https://student-api.mycodelibraries.com/api/user/update", action.obj).then(async (res) => {
        //         await GetFunction()
        //         console.log(res)
        //     })

       
        default:

            return {
                api: state.api
            }
    }
}