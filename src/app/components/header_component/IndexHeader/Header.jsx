import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

import { debounce } from '../helper';

const Header = ({
  drawerClickHandler,
  isShowAddTutorial,
}) => {

  const [dropdownOpen, setDropdownOpen] = useState(false);
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

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <>
      <div className={`${!visible && `header-hide`} row m-0 header card-shadow px-md-5 py-md-0 py-2`}>
        <div className="col-md-4 col-12 m-0 left-section px-4 px-md-0">
          <i className="toggle-button far fa-cabinet-filing mx-md-3 mt-0 mt-1" onClick={() => drawerClickHandler()} />
          {/* <Link to="/"><h1 className="m-0 text-sm-right header-text">Learning Portal | Datacode.in</h1></Link> */}
          <h1 className="m-0 header-text-mobile">Datacode.in</h1>
          <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret className="category-dropdown">
              Categories
              </DropdownToggle>
            <DropdownMenu className="dropdown-menu">
              <div className="row">
                <div className="col-6">
                  <DropdownItem header>Header</DropdownItem>
                  <DropdownItem>Some Action</DropdownItem>
                  <DropdownItem text>Dropdown Item Text</DropdownItem>
                  <DropdownItem disabled>Action (disabled)</DropdownItem>
                </div>
                <div className="col-6">
                  <DropdownItem>Foo Action</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Bar Action</DropdownItem>
                  <DropdownItem>Quo Action</DropdownItem>
                </div>
              </div>
            </DropdownMenu>
          </Dropdown>
        </div>
        <div className="col-4 text-center">
          <Link to="/"><h1 className="m-0 header-text">Learning Portal | Datacode.in</h1></Link>
        </div>
        <div className="col-4 text-right right-section m-0 d-none d-sm-block">
          {isShowAddTutorial ?
            <Link to="/add_tutorial">
              <i className="fad fa-plus-circle green mr-2" />
              Add Tutorial
            </Link>
            :
            <Link to="/signup">
              <div className="btn join-us">
                Join Us
              </div>
            </Link>}
        </div>
      </div>
    </>
  )
}

export default Header