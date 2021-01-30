import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import QuizTestsList from './QuizTestsList';
import CreateQuizHeader from '../contributor_home/create_quiz_header/CreateQuizHeader';

const ContributorHome = ({
  getQuizTestsList,
  userName,
}) => {
  const [quizTestsList, setQuizTestsList] = useState([])

  useEffect(() => {
    getQuizTestsList().then((res) => {
      if (res && res.data) {
        setQuizTestsList(res.data)
      }
    })
  }, [])

  return (
    <>
      <div className="row">
        <div className="col">
          <CreateQuizHeader />
        </div>
      </div>
      <h1>ContributorHome</h1>
      <QuizTestsList quizTestsList={quizTestsList} />
    </>
  );
}

export default ContributorHome;