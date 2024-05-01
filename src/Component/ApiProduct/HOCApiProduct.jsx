import React, { useEffect } from 'react'
import Hellooo1 from '../../Hellooo1'
import { useDispatch, useSelector } from 'react-redux'
import { ProductApiFun } from '../../React-redux/action/ProductApiAction';

function HOCApiProduct(Component) {
       const Function = ()=> {

        const dispatch = useDispatch();
        const state = useSelector(state=> state);

        useEffect(()=>{
          dispatch(ProductApiFun())
        },[])
        
          return(
          <>
            <Hellooo1/>
            <Component Data={state.apiProduct.productApi}/>
          </>
          )
       }
  return ( 
    Function
  )
}

export default HOCApiProduct
