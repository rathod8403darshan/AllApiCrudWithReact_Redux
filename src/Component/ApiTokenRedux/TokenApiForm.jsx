import React, { useEffect, useState } from "react";
import HocTokenApi from "./HocTokenApi";
import { useDispatch } from "react-redux";
import { ApiAddFunToken, ApieditFunToken, token } from "../../React-redux/action/TokenApiFunAction";
import { useParams } from "react-router-dom";
import axios from "axios";

function TokenApiForm({TokenData}) {
    const dispatch = useDispatch();
    const params = useParams();

    const [obj, setObj] = useState({ });
    let [blank, setBlank] = useState({name:"",email:"",gender:"", status:"" });

    useEffect(()=> {
        if(params.idapiToken){
            try {
                axios.get("https://gorest.co.in/public/v2/users/"+params.idapiToken,token).then((res)=> {
                    setObj({...res.data});
                })
            } catch (error) {
                console.log(error)
            }
        }
    },[params.idapiToken])

    const show = (e) => {

        obj[e.target.name] = e.target.value
        blank[e.target.name] = "";
        setObj({ ...obj });
        
    }
    const Data = async () => {

     
        if(params.idapiToken){
            dispatch(ApieditFunToken(obj,params.idapiToken));
        }
        else{
            dispatch(ApiAddFunToken(obj));
        }

        setObj({ ...blank });
    }

  

    return (
        <>
            <form action="" className='mx-auto w-50 mb-4 bg-info-subtle shadow-lg p-3 mt-4'>

                <div>
                    <label htmlFor="">Name</label>   <br />
                    <input type="text" name='name' className='w-100' onChange={show} value={obj.name} /><br />

                </div>
                <div>
                    <label htmlFor="">gmail</label>  <br />
                    <input type="text" name='email' className='w-100' onChange={show} value={obj.email} /><br />

                </div>


                <div>
                    <label htmlFor="">Gender :</label><br />
                    <input type="radio" name='gender' className='ms-2 me-2' value={"male"} onChange={show} checked={obj.gender === "male"} />male
                    <input type="radio" name='gender' className='ms-2 me-2' value={"female"} onChange={show} checked={obj.gender === "female"} />Female
                   
                </div>

                <div>
                    <label htmlFor="">status :</label><br />
                    <input type="radio" name='status' className='ms-2 me-2' value={"active"} onChange={show} checked={obj.status === "active"} />active
                    <input type="radio" name='status' className='ms-2 me-2' value={"inactive"} onChange={show} checked={obj.status === "inactive"} />inactive

                </div>

                <br />

                <button className='btn btn-primary' type='button' onClick={Data}>Submit</button>
            </form>

        </>
    )


}
export default HocTokenApi(TokenApiForm)