import React, { useEffect } from 'react'
import Hellooo1 from '../../Hellooo1'
import { useDispatch } from 'react-redux'
import { ApiGetFun } from '../../React-redux/action/ApiReduxAction'

function HocApi(Compnant) {

    const HocFunc2 = () => {

        const dispatch = useDispatch();

        useEffect(()=> {
            dispatch(ApiGetFun());
        },[])


        return(
        <>

            <Hellooo1 />
            <Compnant />
        </>)
    }

    return HocFunc2
}

export default HocApi