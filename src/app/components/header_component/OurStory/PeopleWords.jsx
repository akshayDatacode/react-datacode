import React from 'react'

const PeopleWords = () => {
  return (
    <>
      <div className="col-md-3 col-13 people-card">
        <div className="quote">
          <i className="fas fa-quote-left text-left" />
        </div>
        <div className="row m-0">
          <div className="col-12 text-center people-card-body">
            <p>Bla .. bla... bla ..lba .. bla ..bl ..dfdfdlddfldlfdd.df.fdf.df vdf djfh fhhejfdh ffiejcid vmdiejie dfmiifjeimsij ffcijfij fefmkcdifeijs dfdkjsdisjdisj fjidjsidjijsicjdfi</p>
            <img
              className="rounded-circle"
              height="140"
              width="140"
              src={require(`../../../../assets/images/svg/profile.jpg`)}
              alt="avatar"
            />
          </div>
        </div>
      </div>

    </>
  )
}

export default PeopleWords