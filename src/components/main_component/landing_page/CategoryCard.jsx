import React from 'react'
import { Link } from 'react-router-dom'

const CategoryCard = ({
  svgSource,
  categoryDiscription,
  categoryName,
  link,
}) => {

  return (
    <>

      <div className="col-12 col-md-3 card-shadow  category-card text-center p-4 mx-4 mb-5">
        <Link to={link}>
          <img
            height="70px"
            width="70px"
            src={require(`../../../assets/images/svg/${svgSource}`)}
            alt="avatar"
            className="my-3"
          />
        </Link>
        <Link to={link}><h6 className="my-2">{categoryName}</h6></Link>
        <p className="my-2 p-3">{categoryDiscription}</p>
      </div>

    </>
  )
}

export default CategoryCard