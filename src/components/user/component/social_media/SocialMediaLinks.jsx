import React from 'react'
import { ReactComponent as SocialMedia } from '../../../../assets/images/svg/social_media.svg'

const SocialMediaLinks = () => {
  return (
    <>
      <div className="row m-0 login">
        <div className="col-12 col-md-8 img-section p-5">
          <div className="p-4">
            <div className="card">
              <div className="card-body">
                <h1>LinkedIN</h1>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h1>Twitter</h1>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h1>Instagram</h1>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h1>Facebook</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4 mt-5 mt-md-0">
          <SocialMedia width="300px" height="300px" />
        </div>
      </div>
    </>
  )
}

export default SocialMediaLinks