import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { DecreamentFun, IcreamentFun } from '../../React-redux/action/ActionFun';

function Shop() {
  let amount = useSelector((state)=>state);
  console.log(amount.count)
    let dispatch = useDispatch()
    // const {withdrawMoney,depositMoney} = bindActionCreators(actionCreator,dispatch);
    
  return (
    <>
    <h1 className='mb-3'>Diposite/withdraw money</h1>
        {/* <button className='btn btn-primary mx-2' onClick={()=>withdrawMoney(100)}>-</button> */}
        {/* <button className='btn btn-primary mx-2' onClick={()=>depositMoney(100)}>+</button>  */}
        {/* <button className='btn btn-primary mx-2' onClick={()=>dispatch(actionCreator.withdrawMoney(100))}>-</button>
        Add this  item to cart
      
        <button className='btn btn-primary mx-2' onClick={()=>dispatch(actionCreator.depositMoney(100))}>+</button>  */}

        <button onClick={()=>dispatch(IcreamentFun(amount.state))}>INCRE</button>
        <button onClick={()=>dispatch(DecreamentFun(amount.state))}>DESCRE</button>
    </>
  )
}

export default Shop
