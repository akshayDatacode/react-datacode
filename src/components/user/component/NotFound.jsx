import React from 'react';
import { ReactComponent as PageNotFound } from '../../../assets/images/svg/404.svg'
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <div className="row m-0">
        <div className="col-12 img-section p-5">
          <div className="p-4">
            <PageNotFound width="500px" height="500px" />
            <Link to="/">Get Back to Home</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFound;