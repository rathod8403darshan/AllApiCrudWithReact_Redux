import React, { useEffect, useState } from 'react'
import HocApi from './HocApi'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { ApiDeleteFun } from '../../React-redux/action/ApiReduxAction'

function ApiTable() {

    const [arr,setArr] = useState([])
    const dispatch = useDispatch();

    const deletetdata = (id)=> {
        dispatch(ApiDeleteFun(id))
    }

    const state = useSelector(state=> state);
    useEffect(()=> {
        DataGet()
    },[state.api])

    const DataGet = async()=> {
        const data = await state.api
        setArr(data)
    }


    return (
        <>

            <table className='table table-success  text-dark'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>age</th>
                        <th>City</th>
                        <th>gender</th>
                        <th>Hobbies</th>
                        <th>Action</th>

                    </tr>
                </thead>
                <tbody>
                    {arr.api?.map((x, i) => (
                        <tr key={i}>
                            <td><img src={x.image} alt="" width={"50px"} height={"50px"} /></td>
                            <td>{x.firstName}</td>
                            <td>{x.lastName}</td>
                            <td>{x.age}</td>
                            <td>{x.city}</td>
                            <td>{x.gender}</td>
                            <td>{x.hobbies}</td>
                            <td className=''>
                                <button className='btn btn-danger me-3 ' onClick={() => deletetdata(x._id)}>Delete</button>
                                <Link className='btn btn-danger me-3 ' to={`/formapi/${x.id}`}>Edit</Link>

                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </>
    )
}

export default HocApi(ApiTable)