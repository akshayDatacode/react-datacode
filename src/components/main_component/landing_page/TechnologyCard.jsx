import React from 'react'
import { Link } from 'react-router-dom'

const TechnologyCard = ({
  technologyDiscription,
  technologyName,
  link,
  svgSource,
}) => {
  return (
    <>
      <div className="col-12 col-md-3 technology-card card-shadow  category-card mx-4 p-3">
        <div className="row m-0">
          <div className="col-4">
            {svgSource &&
              <Link to={link}>
                <img
                  height="70px"
                  width="70px"
                  src={require(`../../../assets/images/svg/${svgSource}`)}
                  alt="avatar"
                  className="my-3"
                />
              </Link>}
          </div>
          <div className="col-8">
            <Link to={link}><h6 className="pt-3">{technologyName}</h6></Link>
            <p>{technologyDiscription}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default TechnologyCard