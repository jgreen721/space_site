import React from 'react'
import {Link,useLocation} from "react-router-dom"


const NavLink = ({link}) => {
    const location = useLocation();
  return (
    <li className="nav-link-item">
    <Link className={location.pathname == link.location  ? "nav-link active" : "nav-link"} to={link.location}>
        <h5 className="text-white barlow strong">{link.number}</h5>
        <h5 className="text-white barlow thin">{link.destination}</h5>
    </Link>
</li>
  )
}

export default NavLink