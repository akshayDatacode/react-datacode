import React from 'react'
import { Link } from 'react-router-dom'

const TagCard = ({
  title,
  discription,
  svgSource,
  link,
}) => {
  return (
    <>
      <div className="row card-shadow card-tag p-2 mt-4">
        <div className="col-4 text-center pt-3">
          <Link to={link}>
            <img
              height="70px"
              width="70px"
              src={require(`../../../assets/images/svg/${svgSource}`)}
              alt="avatar"
            // className=" card-img-top mx-auto img-fluid img-circle d-block"
            />
          </Link>
        </div>
        <div className="col-8">
          <Link to={link}><h6>{title}</h6></Link>
          <p>{discription}</p>
          <div className="col-12 text-right my-3">
            <Link to={link}>
              <h5 className="text-right justify-content-right">Find out more <i className="fal fa-long-arrow-right" /></h5>
            </Link>
          </div>
        </div>
      </div>
    </>
  )

}

export default TagCard