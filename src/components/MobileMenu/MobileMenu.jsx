import React from 'react'
import {FormatStat} from ".."
import {Link} from "react-router-dom"
import "./MobileMenu.css"

const MobileMenu = ({setShowMobile,showMobile,links}) => {
  return (
    <div className={showMobile ? "mobile-menu" : "mobile-menu hide-menu"}>
        <ul className="mobile-links">
{links.map(link=>(
 <li onClick={()=>setShowMobile(false)} key={link.id} className={showMobile ? "mobile-link-item slide-mobile-link" : "mobile-link-item"}>   
 <Link to={link.location} className="mobile-link text-white">

    <h4 className="strong">{link.number}</h4>
    <h4 className="thin uppercase bellafair">{link.destination}</h4>
  </Link>

</li>
))}
        </ul>
    </div>
  )
}

export default MobileMenu