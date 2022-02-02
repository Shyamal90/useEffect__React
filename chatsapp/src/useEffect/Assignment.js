import React, { useEffect, useState } from 'react'

function Assignment() {
    const [countOne,setCountOne] = useState(0);
    const [countTwo,setCountTwo] = useState(0);

    useEffect(()=>{
        if(countOne <= 10)
          setCountTwo(countOne * 2);
        else
          setCountTwo(0);

          
    },[countOne])
  return (
    <div>
        <div className="counters">
            <p>Counter_1: {countOne} </p>
            <p>Counter_2: {countTwo} </p>
        </div>
        <button onClick={()=>setCountOne(countOne + 1)}>Increment</button>
    </div>
  )
}

export default Assignment
