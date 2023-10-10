import React from 'react'
import {Link} from "react-router-dom"
import "./Dashboard.css"

const Dashboard = () => {
  return (
    <div className="view-container dashboard-container">
      <div className="flex-content-container">
        <div className="content-column barlow">
          <div className="dashboard-card">
            <div className="dashboard-top-header-inline-div">
              <h5 className="uppercase thin dashboard-top-header scale-character">So,</h5>
              {/* <h5 className="thin">,</h5> */}
              <h5 className="uppercase thin dashboard-top-header ml-2 slide-character-left">you want to travel to</h5>
            {/* <h5 className="uppercase thin dashboard-top-header">So, you want to travel to</h5> */}
            </div>
            <h1 className="uppercase dashboard-header bellafair scale-character">Space</h1>
            <p className="thin dashboard-blurb blurb-height raise-character"> Let’s face it; if you want to go to space, you might as well genuinely go to 
  outer space and not hover kind of on the edge of it. Well sit back, and relax 
  because we’ll give you a truly out of this world experience!
            </p>
          </div>
        </div>
        <div className="content-column flex-center">
          <Link to="/destination">
          <div className="explore-div flex-center">
            <div className="overlay"></div>
            <h4 className="uppercase bellaflair thin">Explore</h4>
          </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Dashboard