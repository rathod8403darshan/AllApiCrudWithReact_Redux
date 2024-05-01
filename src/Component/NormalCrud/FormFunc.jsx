import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import { AddFunc, editFun, mountingFunc } from '';
import { useParams } from 'react-router-dom';
import HocCompo from './HocCompo';
import { AddFunc, editFun, mountingFunc  } from '../../React-redux/action/ActionFun';

function FormFunc({countState}) {
    const arr = useSelector((state)=> state.arr);
    const dispatch = useDispatch();
    const params = useParams();

    


    const [obj,setObj]= useState({hobbies:[]})
    const [blank,setBlank]= useState({firstName:"",lastName:"",age:"",city:"",gender:"",hobbies:[]});

    useEffect(()=> {
        if(params.id){
            let id = arr.arr?.find((x)=> x.id == params.id)
              id && setObj({...id})
        }
    },[params.id])

  
      useEffect(() => {
          dispatch(mountingFunc(countState.setCount));
      }, [])
  

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

        if(params.id){
            let index = arr.arr.findIndex((x)=> x.id == params.id);
            dispatch(editFun(index,obj));
        }
        else{
            countState.count++;
            obj.id = countState.count;
            countState.setCount(countState.count);
            setObj({ ...obj })
            console.log(obj)
            dispatch(AddFunc(obj,countState.count));

        }

       


        setBlank({ ...blank })
        setObj({...blank});
    }

  return (
    
    <form action="" className='mx-auto w-50 mb-4 shadow-lg p-4 mt-4 bg-dark  text-white'>

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
  )
}

export default HocCompo(FormFunc);