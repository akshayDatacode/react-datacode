import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({
  drawerClickHandler,
}) => {
  return (
    <>
      <div className="row m-0 header card-shadow px-md-5 py-md-0 py-2">
        <div className="row m-0 left-section px-4 px-md-0">
          <i className="toggle-button fal fa-window" onClick={() => drawerClickHandler()} />
          <h1 className="m-0 text-sm-right header-text">Learning Portal | Datacode.in</h1>
          <h1 className="m-0 text-sm-right header-text-mobile">Datacode.in</h1>
        </div>
        <div className="right-section row m-0 d-none d-sm-block">
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