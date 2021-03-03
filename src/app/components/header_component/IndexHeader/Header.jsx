import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledDropdown } from 'reactstrap'
import PropTypes from 'prop-types'

import { debounce } from '../helper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import Loader from 'react-loader-spinner';

const Header = ({
  drawerClickHandler,
  isShowAddTutorial,
  currentUser,
  logoutUser,
  userProfile,
  userProfileLoading,
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
            <DropdownMenu className="dropdown-menu p-3 text-center">
              <h2>How datacode.in community works?</h2>
              <div className="row m-0 d-flex">
                <div className="col-3 text-center">
                  <Link to="/index_technologies">
                    <img
                      height="70px"
                      width="70px"
                      src={require(`../../../../assets/images/svg/Tutorial.png`)}
                      alt="avatar"
                      className="my-3"
                    />
                  </Link>
                  <Link to="/index_technologies"><h6 className="my-2">Learn</h6 ></Link>
                </div>
                <div className="col-3 text-center">
                  <Link to="/index_programming_questions">
                    <img
                      height="70px"
                      width="70px"
                      src={require(`../../../../assets/images/svg/Practice.png`)}
                      alt="avatar"
                      className="my-3"
                    />
                  </Link>
                  <Link to="/index_programming_questions"><h6 className="my-2">Practice</h6 ></Link>
                </div>
                <div className="col-3 text-center">
                  <Link to="/index_quize_tests">
                    <img
                      height="70px"
                      width="70px"
                      src={require(`../../../../assets/images/svg/Test.png`)}
                      alt="avatar"
                      className="my-3"
                    />
                  </Link>
                  <Link to="/index_quize_tests"><h6 className="my-2">Test</h6 ></Link>
                </div>
                <div className="col-3 text-center">
                  <Link to="/add_tutorial">
                    <img
                      height="70px"
                      width="70px"
                      src={require(`../../../../assets/images/svg/Mcq.png`)}
                      alt="avatar"
                      className="my-3"
                    />
                  </Link>
                  <Link to="/add_tutorial"><h6 className="my-2">Contribute</h6 ></Link>
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
                  <Link to={`/my_profile/${currentUser && currentUser.email}`}>
                    {userProfileLoading ?
                      <div className="rounded-circle header-profile-img">
                        <Loader
                          type="Audio"
                          color="#30006d"
                          height={40}
                          width={40}
                          timeout={8000} //3 secs
                        />
                      </div>
                      :
                      <img
                        className="rounded-circle header-profile-img"
                        height="40"
                        width="40"
                        src={userProfile && userProfile.imgUrl !== "" ? userProfile.imgUrl : require(`../../../../assets/images/svg/profile.jpg`)}
                        alt="datacode"
                      />}
                  </Link>
                  <UncontrolledDropdown setActiveFromChild className="profile-dropdown">
                    <DropdownToggle tag="a" className="ml-3">
                      <i className="far fa-angle-down" />
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu mt-3" right>
                      <DropdownItem header><spna>{currentUser && currentUser.userName}</spna></DropdownItem>
                      <DropdownItem><Link to={`/my_profile/${currentUser.email}`}><span><i className="fas fa-user mr-2" />My Profile</span></Link></DropdownItem>
                      <DropdownItem><Link to={`/my_library`}><span> <i className="fas fa-window-restore mr-2" />My Library</span></Link></DropdownItem>
                      <DropdownItem><Link to="/edit_profile"><span><i className="far fa-user-edit mr-2" />Edit Profile</span></Link></DropdownItem>
                      <DropdownItem>
                        <Link to="/" onClick={() => logoutUser()}>
                          <li>
                            <span>
                              <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />{" "}
                              Log out
                            </span>
                          </li>
                        </Link>
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

Header.defaultProps = {
  email: '',
  userProfile: {},
}

Header.propTypes = {
  email: PropTypes.string,
  userProfile: PropTypes.object,
}

export default Header