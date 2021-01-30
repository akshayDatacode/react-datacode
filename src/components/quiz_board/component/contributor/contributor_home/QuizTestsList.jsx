import React from 'react'
import { Link } from 'react-router-dom'

const QuizTestsList = ({
  quizTestsList
}) => {

  return (
    <>
      {quizTestsList.map((item, i) => (
        <div className="row border border-primary m-2" key={i}>
          <div className="col-10 text-left">
            <h1>{item.quizTitle}</h1>
            <span>Quiz ID: {item.quizId}</span>
            <p>Status: {item.isApproval ? "Live" : "Pending"}</p>
          </div>
          <div className="col-2">
            <Link to={`/create_quiz_test_overview/${item.quizId}`}>
              <i style={{ cursor: "pointer" }} className="fas fa-edit"></i>
            </Link>
          </div>
        </div>
      ))}
    </>
  )
}

export default QuizTestsList