import React, { useEffect, useState } from 'react'

function Lectur_one() {
  let [count,setCount] = useState(0);

  //Write code of useEffect
  useEffect(()=>{
      document.title = `${count <= 0 ? "Chats": "Chats(" + count + ")"}`
  },[count])
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>Message Box 📝</button>
    </div>
  )
}

export default Lectur_one
