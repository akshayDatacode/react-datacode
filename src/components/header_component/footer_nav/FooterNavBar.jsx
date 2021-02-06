import React from 'react'
import { Link } from 'react-router-dom'

const FooterNavBar = () => {
  return (
    <>
      <div className="row m-0 pt-2">
        <div className="col-3 text-center">
          <Link
            to="/index_technologies"
          >
            <i className="fad fa-chalkboard-teacher" />
            <p>Learn</p>
          </Link>
        </div>
        <div className="col-3 text-center">
          <Link to="/index_programming_questions">
            <i className="fad fa-laptop-code" />
            <p>Practice</p>
          </Link>
        </div>
        <div className="col-3 text-center">
          <Link
            to="/index_quize_tests"
          >
            <i className="fad fa-clipboard-list-check" />
            <p>Test</p>
          </Link>
        </div>
        <div className="col-3 text-center">
          <i className="fad fa-users-crown" />
          <p>Grow</p>
        </div>
      </div>
    </>
  )
}

export default FooterNavBar