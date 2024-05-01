import React, { useEffect } from 'react'
import Hellooo1 from '../../Hellooo1'
import { useDispatch, useSelector } from 'react-redux'
import { ApiGetFunToken } from '../../React-redux/action/TokenApiFunAction'

function HocTokenApi(Components) {
    const TokenApiHoc = () => {
       

        const dispatch = useDispatch();
        const state = useSelector(state=> state);

        useEffect(() => {
            dispatch(ApiGetFunToken());
        }, [])
        return (
            <>
                <Hellooo1 />
                <Components TokenData= {state.apiToken.TokenApi} />
            </>

        )

    }
    return TokenApiHoc
  
}

export default HocTokenApi