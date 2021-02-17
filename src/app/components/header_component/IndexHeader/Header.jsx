import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledDropdown } from 'reactstrap'

import { debounce } from '../helper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Header = ({
  drawerClickHandler,
  isShowAddTutorial,
  currentUser,
  logoutUser,
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
      <div className={`${!visible && `header-hide`} row m-0 header card-shadow px-md-5 px-2 py-md-0 py-2`}>
        <div className="col-4 m-0 left-section px-2 px-md-0">
          <i className="toggle-button far fa-cabinet-filing mx-md-3 mt-0 mt-1" onClick={() => drawerClickHandler()} />
          {/* <Link to="/"><h1 className="m-0 text-sm-right header-text">Learning Portal | Datacode.in</h1></Link> */}
          {/* <h1 className="m-0 ">Datacode.in</h1> */}
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
        <div className="col-4 p-0 text-center justify-content-center">
          <Link to="/">
            <img
              height="50px"
              width="180px"
              src={require(`../../../../assets/images/svg/logo.svg`)}
              alt="avatar"
              className="header-text"
            />
          </Link>
          <Link to="/">
            <img
              height="40px"
              width="40px"
              src={require(`../../../../assets/images/svg/monolog.svg`)}
              alt="avatar"
              className="d-md-none"
            />
          </Link>
        </div>
        <div className="col-4 p-0 d-md-flex right-section m-0">
          {!currentUser ?
            <div>
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
                </Link>
              }
            </div>
            :
            <>
              {isShowAddTutorial ?
                <Link to="/add_tutorial">
                  <i className="fad fa-plus-circle green mr-2" />
                  Add Tutorial
                </Link>
                :
                <div className="header-profile d-flex align-items-center">
                  <Link to="/my_profile">
                    <img
                      height="40px"
                      width="40px"
                      src={require(`../../../../assets/images/svg/Python.png`)}
                      alt="avatar"
                      className="header-profile-img rounded-circle ml-3"
                    />
                  </Link>
                  <UncontrolledDropdown setActiveFromChild>
                    <DropdownToggle tag="a" className="ml-3 profile-dropdown">
                      <i class="far fa-angle-down" />
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu mt-3" right>
                      <DropdownItem header>Akshay Mandliya</DropdownItem>
                      <DropdownItem><Link to="/my_profile"><span>My Profile</span></Link></DropdownItem>
                      <DropdownItem>My Library</DropdownItem>
                      <DropdownItem><Link to="/edit_profile">Edit Profile</Link></DropdownItem>
                      <DropdownItem>
                        <span>
                          <Link to="/" onClick={() => logoutUser()}>
                            <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />{" "}
                          Log out
                        </Link>
                        </span>
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </div>
              }
            </>
          }
        </div>
      </div>
    </>
  )
}

export default Header