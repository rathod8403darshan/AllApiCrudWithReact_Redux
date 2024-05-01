import React from 'react';
import HocTokenApi from './HocTokenApi';
import { useDispatch } from 'react-redux';
import { ApiDeleteFunToken } from '../../React-redux/action/TokenApiFunAction';
import { Link } from 'react-router-dom';

function TokenApiTable({TokenData}) {

    const dispatch = useDispatch();
    const deletetdata= (id)=> {
        dispatch(ApiDeleteFunToken(id))
    }
  return (
    <>
         <table className='table table-info'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>email</th>
                        <th>gender</th>
                        <th>status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {TokenData?.map((x, i) => (
                        <tr key={i}>
                            <td>{x.name}</td>
                            <td>{x.email}</td>
                            <td>{x.gender}</td>
                            <td>{x.status}</td>
                            <td>
                                <button className='btn btn-danger me-3' onClick={() => deletetdata(x.id)}>Delete</button>
                                <Link className='btn btn-warning' to={`/formapiToken/${x.id}`}>Edit</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

    </>
  )
}

export default HocTokenApi(TokenApiTable);