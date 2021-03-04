import React from 'react'

const PeopleWords = ({
  item,
}) => {
  return (
    <>
      <div className="col-md-3 col-13 people-card ">
        <div className="quote">
          <i className="fas fa-quote-left text-left" />
        </div>
        <div className="row m-0">
          <div className="col-12 text-center people-card-body">
            <img
              className="rounded-circle"
              height="140"
              width="140"
              src={item.imgUrl}
              alt="avatar"
            />
            <h2>{item.name}</h2>
            <p>{item.testimonial}</p>
          </div>
        </div>
      </div>

    </>
  )
}

export default PeopleWords