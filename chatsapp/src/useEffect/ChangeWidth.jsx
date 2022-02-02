import React, { useEffect, useState } from 'react'
import './changeWidth.css'

function ChangeWidth() {
    let [width,setWidth] = useState(window.screen.width);

    useEffect(()=>{
       window.addEventListener("resize",()=>{
           setWidth(window.innerWidth);
       })
    })
  return (
    <div className='container'>
      <h1>Actuall Width of your screen 🖥 {width}</h1>
    </div>
  )
}

export default ChangeWidth
