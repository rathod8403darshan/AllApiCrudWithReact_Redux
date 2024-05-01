import React, { useEffect, useState } from 'react'
import HocApi from './HocApi'
import { useDispatch } from 'react-redux';
import { ApiAddFun, ApiupdateFun } from '../../React-redux/action/ApiReduxAction';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function ApiForm() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const params = useParams();
    const [obj, setObj] = useState({ hobbies: [] })
    const [blank, setBlank] = useState({ firstName: "", lastName: "", age: "", city: "", gender: "", hobbies: [] });

   

    useEffect(()=> {
        if(params.idapi){
            axios.get("https://student-api.mycodelibraries.com/api/user/get-user-by-id?id="+params.idapi).then((res)=> {
                setObj({...res.data.data,hobbies:res.data.data.hobbies.split(",")})
            })
        }
    },[params.idapi])


    const show = (e) => {
        if (e.target.type === "checkbox") {
            if (e.target.checked) {
                obj.hobbies.push(e.target.value)
            }
            else {
                obj.hobbies = obj.hobbies.filter((x) => x !== e.target.value)
            }
            blank[e.target.name] = []
        }else if(e.target.name == "image"){
            obj.image = e.target.files[0];
        }
        else {
            obj[e.target.name] = e.target.value
        }
        setObj({ ...obj })
    }

    const Data = () => {
        setBlank({ ...blank })

        const formData1 = new FormData();
        formData1.append("firstName",obj.firstName)
        formData1.append("lastName",obj.lastName)
        formData1.append("age",obj.age)
        formData1.append("hobbies",obj.hobbies)
        formData1.append("gender",obj.gender)
        formData1.append("city",obj.city)
        formData1.append("userImage",obj.image);
        
        if(params.idapi){
            formData1.append("id",obj._id);
            dispatch(ApiupdateFun(params.idapi,formData1));
        }
        else{
            dispatch(ApiAddFun(formData1));
        }


        setObj({ ...blank });

        setTimeout(()=>{
            navigate("/tableapi");
        },500)

    }
    return (
        <>

            <form action="" className='mx-auto w-50 mb-4 shadow-lg p-4 mt-4 bg-success-subtle  text-dark'>

                <div>
                    <label htmlFor="">First Name :</label>   <br />
                    <input type="text" name='firstName' className='w-100' onChange={show} value={obj.firstName} /><br />

                </div>
                <div>
                    <label htmlFor="">Last Name :</label>  <br />
                    <input type="text" name='lastName' className='w-100' onChange={show} value={obj.lastName} /><br />

                </div>

                <div>
                    <label htmlFor="">age :</label>  <br />
                    <input type="number" name='age' className='w-100' onChange={show} value={obj.age} />

                </div>
                <div>
                    <label htmlFor="">city ;</label>  <br />
                    <input type="text" name='city' className='w-100' onChange={show} value={obj.city} />

                </div>
                <div>
                    <label htmlFor="">Profile ;</label>  <br />
                    <input type="file" name='image' className='w-50' onChange={show} />

                </div>
                <div>
                    <label htmlFor="">Gender :</label><br />
                    <input type="radio" name='gender' className='ms-2 me-2' value={"male"} onChange={show} checked={obj.gender === "male"} />male
                    <input type="radio" name='gender' className='ms-2 me-2' value={"female"} onChange={show} checked={obj.gender === "female"} />Female
                    <input type="radio" name='gender' className='ms-2 me-2' value={"other"} onChange={show} checked={obj.gender === "other"} />other
                </div>
                <div>
                    <label htmlFor="">Hobbies :</label>  <br />
                    <input type="checkbox" name='hobbies' className='ms-2 me-2' value={"cricket"} onChange={show} checked={obj.hobbies.includes("cricket")} />Cricket
                    <input type="checkbox" name='hobbies' className='ms-2 me-2' value={"football"} onChange={show} checked={obj.hobbies.includes("football")} />football
                    <input type="checkbox" name='hobbies' className='ms-2 me-2' value={"kho-kho"} onChange={show} checked={obj.hobbies.includes("kho-kho")} />kho kho
                    <input type="checkbox" name='hobbies' className='ms-2 me-2' value={"kabaddi"} onChange={show} checked={obj.hobbies.includes("kabaddi")} />kabaddi
                </div>




                <br />

                <button className='btn btn-primary' type='button' onClick={Data}>Submit</button>
            </form>

        </>
    )
}

export default HocApi(ApiForm)