import axios from "axios";
import { GETAPISTUDENT } from "../type/TypeFun";

export const GetStudentApiFun = () => {
  return (dispatch) => {
        axios.get("https://student-api.mycodelibraries.com/api/student/get").then((response) => {
            dispatch({
                type:GETAPISTUDENT,
                data:response.data.data 
            })
        })
  };
};

export const AddStudentApiFun = (obj) => {
  return (dispatch) => {
        axios.post("https://student-api.mycodelibraries.com/api/student/add",obj).then((response) => {
            dispatch(GetStudentApiFun())
        })
  };
};

// };
export const DeleteStudentApiFun = (id) => {
  return (dispatch) => {
    axios.delete("https://student-api.mycodelibraries.com/api/student/delete?id="+id).then((response) => {
        dispatch(GetStudentApiFun())
    })
  };
};
export const UpdateStudentApiFun = (obj) => {
  return (dispatch) => {
    axios.post("https://student-api.mycodelibraries.com/api/student/update",obj).then((response) => {
        dispatch(GetStudentApiFun())
    })
  };
};
