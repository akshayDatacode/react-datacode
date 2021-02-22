import React from 'react'
import PropTypes from 'prop-types'
import TutorialCard from '../../../../main_component/tutorials/components/Tutorials/TutorialCard'

const MyLibrary = ({
  userProfile,
  userProfile: { myTutorialsLibrary }
}) => {
  return (
    <>
      <h1>My Library</h1>
      <h6>Tutorials</h6>
      {myTutorialsLibrary && myTutorialsLibrary.map((item) => {
        return <TutorialCard tutorial={item} id={item.id} title={item.title} likesCount={item.likes.length} />
      })}
    </>
  )
}

MyLibrary.defaultProps = {
  userProfile: {},
  myTutorialsLibrary: [],
}

MyLibrary.propTypes = {
  userProfile: PropTypes.object,
  myTutorialsLibrary: PropTypes.array,
}

export default MyLibrary