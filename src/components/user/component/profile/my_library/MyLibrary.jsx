import React, { useState } from 'react'
import PropTypes from 'prop-types'

import TutorialCard from '../../../../main_component/tutorials/components/Tutorials/TutorialCard'
import { categories } from './helper'

const MyLibrary = ({
  currentUser,
  currentUser: { myTutorialsLibrary }
}) => {
  const [showTechIcon, setShowTechIcon] = useState('programming')

  return (
    <>
      <div className="row m-0 mt-3">
        <div className="col-12 px-5 text-md-left text-center">
          <h1 className="p-3">My Library</h1>
        </div>
      </div>
      <div className="row m-0">
        <div className="col-12 col-md-4 tech-tag-col">
          <ul className="mt-5">
            {categories.map((item) => (
              <li onClick={() => setShowTechIcon(item.techCategory)}>
                <div className="category-tag text-center">
                  <img
                    height="50px"
                    width="50px"
                    src={require(`../../../../../assets/images/svg/${item.svgSource}`)}
                    alt="avatar"
                  />
                  <p className="mb-0 mt-2">{item.title}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-12 col-md-8">
          <div className="row m-0 mt-4 px-3 px-md-5 d-flex justify-content-center">
            {myTutorialsLibrary && myTutorialsLibrary.map((item) => {
              return <TutorialCard
                tutorial={item}
                id={item.id}
                title={item.title}
                likesCount={item.likes && item.likes.length}
              />
            })}
          </div>
        </div>
      </div>
    </>
  )
}

MyLibrary.defaultProps = {
  currentUser: {},
  myTutorialsLibrary: [],
}

MyLibrary.propTypes = {
  currentUser: PropTypes.object,
  myTutorialsLibrary: PropTypes.array,
}

export default MyLibrary