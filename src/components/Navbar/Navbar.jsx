import React, {useState} from 'react'
import {Link} from "react-router-dom"
import {logoIcon,burgerIcon,closeIcon} from "../../const"
import {NavLink} from "./components"
import { MobileMenu } from '..'
import "./Navbar.css"

const Navbar = () => {
    const [showMobile,setShowMobile] = useState(false)
    const links=[
        {id:1,number:'00',destination:"Home",location:"/"},
        {id:2,number:'01',destination:"Destination",location:"/destination"},
        {id:3,number:'02',destination:"Crew",location:"/crew"},
        {id:4,number:'03',destination:"Technology",location:"/technology"}
    ]
  return (
    <nav className="navbar text-white">
<div className="nav-logo-div">
    <img className="nav-logo" src={logoIcon} alt="" />
</div>
<div className="nav-line"></div>

<ul className="nav-links">
{/* <div className="nav-line"></div> */}

  {links.map(link=>(
      <NavLink key={link.id} link={link}/>
  ))}
</ul>
<div onClick={()=>setShowMobile(!showMobile)} className="mobile-burger-icon-div">
    <img className="mobile-burger-icon" src={showMobile ? closeIcon : burgerIcon} alt="" />
</div>
<MobileMenu setShowMobile={setShowMobile} links={links} showMobile={showMobile}/>
    </nav>
  )
}

export default Navbar