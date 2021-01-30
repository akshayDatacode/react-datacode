import React from "react"
import { ReactComponent as Confirm } from '../../../assets/images/svg/confirmation.svg'

const Confirmation = () => {

  return (
    <>
      <div className="row m-0 login">
        <div className="col-12 col-md-8 img-section p-5">
          <div className="p-4">
            <Confirm width="auto" height="auto" />
          </div>
        </div>
        <div className="col-12 col-md-4 login-section">
          <h1 className="text-center login-text">Confirmation Email</h1>
          <div className="pt-md-3 mt-5 px-4 login-card">
            <p>
              Hey! Please Check your Email to comfirm your membership with Datacode.in
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Confirmation;