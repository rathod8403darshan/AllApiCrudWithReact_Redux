import React, { useEffect, useState } from 'react'
import HOCApiStudent from './HOCApiStudent'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { AddStudentApiFun, UpdateStudentApiFun } from '../../React-redux/action/StudentApiAction';
import axios from 'axios';

function ApiStudentForm() {
    const arr = useSelector((state)=> state);
    const dispatch = useDispatch();
    const params = useParams();

    


    const [obj,setObj]= useState({hobbies:[]})
    const [blank,setBlank]= useState({firstName:"",lastName:"",age:"",city:"",gender:"",hobbies:[]});

    useEffect(()=> {
        if(params.idapiStudent){
            axios.get("https://student-api.mycodelibraries.com/api/student/get-student-by-id?id="+params.idapiStudent).then((response)=>{
                setObj({...response.data.data,hobbies:response.data.data.hobbies.split(",")});
            })
        }
    },[params.idapiStudent])

  
  

    const show = (e)=> {
        if (e.target.type === "checkbox") {
            if (e.target.checked) {
                 obj.hobbies.push(e.target.value)
            }
            else {
                 obj.hobbies = obj.hobbies.filter((x) => x !== e.target.value)
            }
            blank[e.target.name] = []
       }
       else {
            obj[e.target.name] = e.target.value
       }
       setObj({ ...obj })
    }

    const Data = ()=> {

        if(params.idapiStudent){
            obj.id = params.idapiStudent
            dispatch(UpdateStudentApiFun(obj));
        }
        else{
            
            dispatch(AddStudentApiFun(obj));

        }

       
        console.log(obj)

        setBlank({ ...blank })
        setObj({...blank});
    }
  return (
    <>
                       <form action="" className='mx-auto w-50 mb-4 shadow-lg p-4 mt-4 bg-primary-subtle  '>

<div>
    <label htmlFor="">First Name :</label>   <br />
    <input type="text" name='firstName' className='w-100' onChange={show}  value={obj.firstName}/><br />

</div>
<div>
    <label htmlFor="">Last Name :</label>  <br />
    <input type="text" name='lastName' className='w-100' onChange={show}  value={obj.lastName}/><br />

</div>

<div>
    <label htmlFor="">age :</label>  <br />
    <input type="number" name='age' className='w-100' onChange={show}   value={obj.age}/>

</div>
<div>
    <label htmlFor="">city ;</label>  <br />
    <input type="text" name='city' className='w-100' onChange={show}   value={obj.city}/>

</div>
<div>
    <label htmlFor="">Gender :</label><br/>
    <input type="radio" name='gender' className='ms-2 me-2' value={"male"} onChange={show} checked={obj.gender === "male"}/>male
    <input type="radio" name='gender' className='ms-2 me-2' value={"female"} onChange={show} checked={obj.gender === "female"}/>Female
    <input type="radio" name='gender' className='ms-2 me-2' value={"other"} onChange={show}  checked={obj.gender === "other"}/>other
</div>
<div>
    <label htmlFor="">Hobbies :</label>  <br />
    <input type="checkbox" name='hobbies' className='ms-2 me-2' value={"cricket"} onChange={show} checked={obj.hobbies.includes("cricket")}/>Cricket
    <input type="checkbox" name='hobbies' className='ms-2 me-2' value={"football"} onChange={show}  checked={obj.hobbies.includes("football")}/>football
    <input type="checkbox" name='hobbies' className='ms-2 me-2' value={"kho-kho"} onChange={show}   checked={obj.hobbies.includes("kho-kho")}/>kho kho
    <input type="checkbox" name='hobbies' className='ms-2 me-2' value={"kabaddi"} onChange={show}  checked={obj.hobbies.includes("kabaddi")}/>kabaddi
</div>




<br />

<button className='btn btn-primary' type='button' onClick={Data}>Submit</button>
</form>
    </>
  )
}

export default HOCApiStudent(ApiStudentForm)
