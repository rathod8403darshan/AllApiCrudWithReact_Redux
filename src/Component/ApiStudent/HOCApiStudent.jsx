import React, { useEffect } from 'react'
import Hellooo1 from '../../Hellooo1'
import { useDispatch, useSelector } from 'react-redux';
import { GetStudentApiFun } from '../../React-redux/action/StudentApiAction';

function HOCApiStudent(Component) {
    const Function = ()=> {
        
        const dispatch = useDispatch();
        const state = useSelector(state=> state);

        useEffect(()=>{
          dispatch(GetStudentApiFun())
        },[])

        return(

           <>
            <Hellooo1/>
            <Component Getdata={state.apiStudent.students}/>
           </>
        )
    }
  return (
    Function
  )
}

export default HOCApiStudent
