import React from 'react'
import HOCApiStudent from './HOCApiStudent'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { DeleteStudentApiFun } from '../../React-redux/action/StudentApiAction';

function ApiStudentTable({Getdata}) {
    const dispatch = useDispatch();
    const deletetdata = (id)=> {
        dispatch(DeleteStudentApiFun(id));
    }
  return (
    <>
         <table className='table table-primary '>
    <thead>
        <tr>
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
            {Getdata?.map((x, i) => (
                <tr key={i}>
                    <td>{x.firstName}</td>
                    <td>{x.lastName}</td>
                    <td>{x.age}</td>
                    <td>{x.city}</td>
                    <td>{x.gender}</td>
                    <td>{x.hobbies}</td>
                    <td className=''>
                            <button className='btn btn-danger me-3 ' onClick={()=>deletetdata(x._id)}>Delete</button>
                            <Link className='btn btn-danger me-3 ' to={`/formapiStudent/${x._id}`}>Edit</Link>
                           
                        </td>
                </tr>
            ))}
        </tbody>
</table>
    </>
  )
}

export default HOCApiStudent(ApiStudentTable)
