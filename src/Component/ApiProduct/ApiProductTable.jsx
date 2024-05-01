import React from 'react'
import HOCApiProduct from './HOCApiProduct'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { DeleteProductApiFun } from '../../React-redux/action/ProductApiAction'

function ApiProductTable({Data}) {
  const dispatch = useDispatch()
   const deletetdata = (id)=>{
       dispatch(DeleteProductApiFun(id));
   }
  return (
    <>
            <table className='table table-danger   text-dark'>
                <thead>
                    <tr>
                        <th>category</th>
                        <th>productName</th>
                        <th>price</th>
                        <th>clothSize</th>
                        <th>inStock</th>
                        <th>description</th>
                        <th>Action</th>

                    </tr>
                </thead>
                <tbody>
                    {Data?.map((x, i) => (
                        <tr key={i}>
      
                            <td>{x.category}</td>
                            <td>{x.productName}</td>
                            <td>{x.price}</td>
                            <td>{x.clothSize}</td>
                            <td>{x.inStock}</td>
                            <td>{x.description}</td>
                            <td className=''>
                                <button className='btn btn-danger me-3 ' onClick={() => deletetdata(x._id)}>Delete</button>
                                <Link className='btn btn-danger me-3 ' to={`/formapiProduct/${x._id}`}>Edit</Link>

                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

    </>
  )
}

export default HOCApiProduct(ApiProductTable)
