import React, { useState } from 'react'
import Hellooo1 from '../../Hellooo1';
// import Hellooo1 from '../'

function HocCompo(Components) {
    
    const Show2 = () => {
        
        
        let [count,setCount]=useState(0);
        
        return (
            <>
                <Hellooo1 />
                <Components countState={{count,setCount}}/>
            </>
        )
    }
    return Show2
}

export default HocCompo