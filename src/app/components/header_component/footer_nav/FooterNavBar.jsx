import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { debounce } from '../helper'

const FooterNavBar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffSet);
  const [visible, setVisible] = useState(true)

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);

    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);

  }, [prevScrollPos, visible, handleScroll])

  return (
    <>
      <div className={`${!visible && `footer-navbar-hide`} footer-navbar`}>
        <div className="row m-0 pt-3 pb-1">
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
      </div>
    </>
  )
}

export default FooterNavBar