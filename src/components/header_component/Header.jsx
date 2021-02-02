import React from 'react'
import { Link } from 'react-router-dom'
import DrawerToggleButton from './side_drawer/DrawerToggleButton'

const Header = ({
  drawerClickHandler
}) => {
  return (
    <>
      <div className="row m-0 header card-shadow px-md-5">
        <div className="left-section">
          <div className="toolbar_toggle-button">
            <DrawerToggleButton clickButton={drawerClickHandler} />
          </div>
          <h1 className="m-0 header-text">Learning Portal | Datacode.in</h1>
        </div>
        <div className="row m-0">
          <div className="col-12">
            <Link to="/signup">
              <div className="btn join-us">
                Join Us
            </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header