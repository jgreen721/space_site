import React from 'react'
import "./FormatHeader.css"

const FormatHeader = ({strongClassname, thinClassname,number,title}) => {
  return (
    <li className="nav-link-item page-header">
        <h5 className={`${strongClassname} barlow strong uppercase`}>{number}</h5>
        <h5 className={`${thinClassname} text-white barlow thin uppercase`}>{title}</h5>
</li>
  )
}

export default FormatHeader