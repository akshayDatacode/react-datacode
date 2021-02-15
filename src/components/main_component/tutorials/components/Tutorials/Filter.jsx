import React, { useState } from 'react'

const Filter = () => {
  const [showFilter, setShowFilter] = useState(true)

  return (
    <>
      {!showFilter &&
        <div className="show-filter" onClick={() => setShowFilter(!showFilter)}>
          <h5 className="text-left p-2 mb-0 mx-2"><i class="far fa-filter"></i> Filter </h5>
          <hr className="m-0" />
        </div>
      }
      {showFilter &&
        <div className={"filter"}>
          <div >
            <h5 className="text-right p-2 mb-0">
              <i
                onClick={() => setShowFilter(!showFilter)}
                className="fal fa-times mr-3 d-md-none"
              />
            </h5>
            <div className="filter-text">
              <h5 className="text-center p-2 mb-0"><i class="far fa-filter"></i> Filter </h5>
              <hr className="m-0" />
            </div>
          </div>
          <div className="px-4">
            <h6>Type of course</h6>
            <div className="align-items-center d-flex mb-2">
              <input type="checkbox" className="mr-3" />
              <p><i className="fad fa-gifts" /> Free</p>
            </div>
            <div className="align-items-center d-flex mb-2">
              <input type="checkbox" className="mr-3" />
              <p>Paid <i className="fal fa-money-bill-wave" /></p>
            </div>
            <h6>Type of Medium</h6>
            <div className="align-items-center d-flex mb-2">
              <input type="checkbox" className="mr-3" /><p>Video</p>
            </div>
            <div className="align-items-center d-flex mb-2">
              <input type="checkbox" className="mr-3" /><p>Book</p>
            </div>
            <div className="align-items-center d-flex mb-2">
              <input type="checkbox" className="mr-3" /><p>PDF Notes</p>
            </div>
            <h6>Type of Levels</h6>
            <div className="align-items-center d-flex mb-2">
              <input type="checkbox" className="mr-3" /><p>Beginner</p>
            </div>
            <div className="align-items-center d-flex mb-2">
              <input type="checkbox" className="mr-3" /><p>Intermediate</p>
            </div>
            <div className="align-items-center d-flex mb-2">
              <input type="checkbox" className="mr-3" /><p>Advanced</p>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default Filter