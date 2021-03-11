import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const MyProfile = ({
  getUserProfile,
  match: { params },
  match: { params: { userName } },
  userProfile,
  currentUser,
}) => {

  useEffect(() => {
    console.log("userName", userName)
    if (userName) {
      getUserProfile(userName);
    }
  }, [userName])

  const { firstName, branch, university, imgUrl } = userProfile ? userProfile : {}

  return (
    <>
      <div className="row m-0 my-profile p-md-5 p-2">
        <div className="col-md-4 col-12 text-center left-profile-section">
          <div className="mt-4">
            <img
              className="rounded-circle header-profile-img"
              height="140"
              width="140"
              src={imgUrl !== "" ? imgUrl : require(`../../../../../assets/images/svg/monolog.svg`)}
              alt="avatar"
            />
          </div>
          <h6 className="mt-3 mb-0">{firstName}</h6>
          <span className="bio">Community Boy | React | I Love Datacode</span>
          <div className="mt-3">
            <i className="fab fa-linkedin mr-3" />
            <i className="fab fa-twitter-square mr-3" />
            <i className="fab fa-github" />
          </div>
          {(userName === (currentUser && currentUser.userName)) &&
            <Link to="/edit_profile" >
              <div className="btn edit-profile-btn my-3">Edit Profile <i className="fad fa-user-edit ml-2" /></div>
            </Link>
          }

          <div className="profile-dashboard mt-0 mt-2">
            <div className="row m-0">
              <div className="col-6 p-md-2">
                <i className="far fa-grin-hearts" />
                <span>25 followers</span>
              </div>
              <div className="col-6 p-md-2 text-left">
                <i className="fal fa-user-friends" />
                <span>5 following</span>
              </div>
            </div>
            <div className="row m-0  mt-0 mt-2">
              <div className="col-6 p-md-2">
                <i className="fal fa-books" />
                <span>20 libraries</span>
              </div>
              <div className="col-6 p-md-2 text-left">
                <i className="fal fa-hand-heart" />
                <span>6 contributions</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-8 col-12 ">
          <div className="row m-0 graduation-details">
            <div className="col-12 p-3">
              <h6><i className="fas fa-university" />{university}</h6>
              <h6><i className="fas fa-code-branch" />{branch}</h6>
              <h6><i className="fal fa-graduation-cap" />2016-2020</h6>
            </div>
          </div>
          <div className="row m-0">
            <div className="col-md-6 col-12 mt-0 mt-5">
              <h6>Contributions</h6>
            </div>
            <div className="col-md-6 col-12 mt-0 mt-5">
              <h6>Activities</h6>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

MyProfile.defaultProps = {
  email: '',
  userProfile: {},
}

MyProfile.propTypes = {
  email: PropTypes.string,
  userProfile: PropTypes.object
}

export default MyProfile