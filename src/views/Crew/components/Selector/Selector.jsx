import React from 'react'
import Dot from "./Dot"
import "./Selector.css"


const Selector = ({counter,handleChangeCrew}) => {
    const dots = [
        {id:1,counterVal:0},
        {id:2,counterVal:1},
        {id:3,counterVal:2},
        {id:4,counterVal:3},
    ];

  return (
    <ul className="crew-selector">
        {dots.map(d=>(
        
            <Dot counter={counter} handleChangeCrew={handleChangeCrew} key={d.id} val={d.counterVal}/>
           
        ))}

    </ul>
  )
}

export default Selector