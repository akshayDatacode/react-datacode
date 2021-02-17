import React from 'react'
import { Link } from 'react-router-dom'

const MyProfile = () => {
  return (
    <>
      <div className="row m-0 my-profile p-md-5 p-2">
        <div className="col-md-4 col-12 text-center left-profile-section">
          <div className="mt-4">
            <img
              className="rounded-circle header-profile-img"
              height="140"
              width="140"
              src={require(`../../../../../assets/images/svg/profile.jpg`)}
              alt="avatar"
            />
          </div>
          <h6 className="mt-3 mb-0">Akshay Mandliya</h6>
          <spna className="bio">Community Boy | React | I Love Datacode</spna>
          <div className="mt-3">
            <i className="fab fa-linkedin mr-3" />
            <i className="fab fa-twitter-square mr-3" />
            <i className="fab fa-github" />
          </div>
          <Link to="/my_profile" >
            <div className="btn edit-profile-btn my-3">Edit Profile <i className="fad fa-user-edit ml-2" /></div>
          </Link>

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
        <div className="col-md-4 col-12 mt-0 mt-5">
          <h6>Contributions</h6>
        </div>
        <div className="col-md-4 col-12 mt-0 mt-5">
          <h6>Activities</h6>
        </div>
      </div>
    </>
  )
}

export default MyProfile