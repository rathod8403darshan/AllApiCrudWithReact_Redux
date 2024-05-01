import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import HocCompo from './HocCompo';
import { DeleteFun, mountingFunc } from '../../React-redux/action/ActionFun';

function TableFunc({countState}) {

    const arr = useSelector((state)=> state);
    console.log(arr.arr.arr)
    const dispatch = useDispatch()

    const deletetdata = (id)=> {
        const index = arr.arr.arr.findIndex((x)=> x.id === id);
        console.log(index)
        dispatch(DeleteFun(index))
    }
    // const EditData = (id)=> {
    //     const obj = arr.arr.arr.find((x)=> x.id === id);

    //     localStorage.setItem("obj",JSON.stringify(obj));
    // }

    useEffect(() => {
        dispatch(mountingFunc(countState.setCount));
    }, [])

  return (
    <table className='table table-dark '>
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
            {arr.arr.arr?.map((x, i) => (
                <tr key={i}>
                    <td>{x.id}</td>
                    <td>{x.firstName}</td>
                    <td>{x.lastName}</td>
                    <td>{x.age}</td>
                    <td>{x.city}</td>
                    <td>{x.gender}</td>
                    <td>{x.hobbies}</td>
                    <td className=''>
                            <button className='btn btn-danger me-3 ' onClick={()=>deletetdata(x.id)}>Delete</button>
                            <Link className='btn btn-danger me-3 ' to={`/form/${x.id}`}>Edit</Link>
                           
                        </td>
                </tr>
            ))}
        </tbody>
</table>

  )
}

export default HocCompo(TableFunc)