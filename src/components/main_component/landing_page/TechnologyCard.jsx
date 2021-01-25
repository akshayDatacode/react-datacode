import React from 'react'

const TechnologyCard = ({
  technologyDiscription,
  technologyName,
  link,
  svgSource,
}) => {
  return (
    <>
      <div className="col-12 col-md-3 technology-card card-shadow  category-card mx-4 p-3">
        <div className="row">
          <div className="col-4">

          </div>
          <div className="col-8">
            <h6>{technologyName}</h6>
            <p>{technologyDiscription}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default TechnologyCard