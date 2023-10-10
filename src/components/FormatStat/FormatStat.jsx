import React, {useEffect} from 'react'
import CountUp from "react-countup"


const FormatStat = ({field,value}) => {
 
  return (
    <li className="stat-item">
        <h5 className="barlow thin uppercase muted">{field}</h5>
        <h4 className="bellefair uppercase thin">
          {value == "1.6 bil. km" ? value : <>
          <CountUp start={0}
                    end={value.split(" ")[0].replace(",","")}
                    duration={2}/> 
          {" " + value.split(" ")[1]}
         </> }
          </h4>
    </li>
  )
}

export default FormatStat