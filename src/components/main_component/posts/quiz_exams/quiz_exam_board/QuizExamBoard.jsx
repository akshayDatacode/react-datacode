import React, { useEffect, useCallback, useState } from "react";
import QuizeTest from "../../mcqQuestions/quize_test/quizeTest";
import ScoreCard from '../../mcqQuestions/scoreCard';
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import Countdown from 'react-countdown'
import { FullScreen, useFullScreenHandle } from "react-full-screen"
import '../../../../../assets/css/fullScreen.css'
import Quize from "../../mcqQuestions/quize";
import QuizFrame from "./QuizFrame";
import { cQuizData } from './helper'
import Timer from "../Timer";

const CQuizExam = () => {



  const initialstate = {
    isCorrect: false,
    isClicked: false,
    status: "",
    show: false,
    startQuiz: false,
  };
  const [state, setState] = useState(initialstate)
  const [quizData, setQuizData] = useState([])
  const [selectedQuizID, setSelectedQuizID] = useState(0)
  const [count, setCount] = useState(1)

  useEffect(() => {
    const quizData = cQuizData()
    setQuizData(quizData)
  }, [])

  const counter = () => {
    quizData.map((item) => {
      if (item.userAns === item.correctAns) {
        setState({ ...state, count: state.count + 1 });
      }
    })

  };

  // const showQuizeScore = () => {
  //   setState({ ...state, show: true });
  // };

  const handleShow = () => {
    setState({ ...state, show: true });
  };

  const handleClose = () => {
    setState({ ...state, show: false });
  };

  const handle = useFullScreenHandle()
  const renderer = ({ hours, minutes, seconds, completed }) => {

    if (completed) {
      // Render a completed state
      handle.exit()
      setState({ ...state, startQuiz: false })
      handleSubmitExam()
      return <h1 className="text-dark">Time Completed</h1>
    } else {
      // Render a countdown
      return <h3 className="text-white text-center ml-5">{hours}:{`0${minutes}`}:{seconds}</h3>;
    }
  };

  const handleQuiz = () => {
    setState({ ...state, startQuiz: !state.startQuiz })
  }

  const handleSaveQuiz = (userAns, index) => {
    let quizDataRef = quizData
    quizDataRef[index].userAns = userAns
    setQuizData(quizDataRef)
    setSelectedQuizID(parseInt(selectedQuizID + 1))
  }
  const handleExamQuizShow = (id) => {
    setSelectedQuizID(id)
  }
  const handleSubmitExam = () => {
    handleQuiz()
    let count1 = 0
    quizData.map((item) => {
      if (item.userAns === item.correctAns) {
        debugger
        console.log(count1)
        count1 = count1 + 1
        setCount(count1)
      }
    })
    console.log(count1)
    console.log("Final", quizData)
  }

  return (
    <>
      <div class="container-fluid">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-md-7 ">
            <div className="row">
              <div className="col text-center mt-3 mb-3">
                <h2>C Quiz Test Beginner</h2>
              </div>
            </div>
            <div className="row">
              <button
                className="btn btn-primary"
                onClick={() => {
                  handleQuiz();
                  handle.enter()
                }}
              >
                Chaluu Start Quiz
                </button>
            </div>

            <FullScreen handle={handle}>
              {state.startQuiz &&
                <>

                  <div id="quiz-container" className="row pl-4 pr-4">
                    <div className="col-4 ">

                      <div className="border border-white" style={{ overflow: 'auto', marginTop: '55px', height: "790px" }}>
                        {quizData.map((item) => (
                          <div id="question-lines">
                            <ol className="list">
                              <div id="question-button">
                                <div onClick={() => handleExamQuizShow(item.quiz_id)}>
                                  <li style={{ marginTop: '12px' }}>{item.question}</li>

                                </div>
                              </div>
                            </ol>
                          </div>

                        ))}
                      </div>
                    </div>
                    <div id="quiz" className="col-8">

                      <div className="row text-center" id="timer">

                        <div style={{ height: "43px", marginLeft: "20px" }} className="row text-right">
                          <button

                            className="btn btn-success"
                            onClick={() => {
                              handleSubmitExam();
                              handleQuiz();
                              handle.exit();
                            }}
                          >Submit Test
                        </button>

                          <button
                            style={{ marginLeft: "162px" }}
                            className="btn btn-sm btn-danger"
                            onClick={() => {
                              handleQuiz();
                              handle.exit();
                            }}
                          >End Test
                        </button>

                        </div>

                        <div id="logo"
                          src={require("../../../../../assets/images/datacodelogo.jpeg")}
                        >

                        </div>
                        <div id="line">
                          |
</div>
                        <div id="title">
                          Datacode Exam
  </div>
                        <div id="time" className="col-2">
                          <div style={{ marginLeft: "-50px" }}>
                            <Timer />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        {quizData.map((item, index) => {
                          if (item.quiz_id === selectedQuizID) {
                            return <QuizFrame
                              key={index}
                              quizeNo="4"
                              index={index}
                              question={item.question}
                              v1={item.v1}
                              v2={item.v2}
                              v3={item.v3}
                              v4={item.v4}
                              handleSaveQuiz={handleSaveQuiz}
                            />
                          }
                        })}
                      </div>

                      <div className="row border border-white">

                        <div className="col text-left">
                          {selectedQuizID !== 0 &&

                            <button
                              className="btn btn-sm btn-danger"
                              onClick={() => {
                                setSelectedQuizID(parseInt(selectedQuizID - 1))
                              }}
                            >Prev
                          </button>
                          }
                        </div>

                        <div className="col text-right">
                          <button
                            className="btn btn-sm btn-primary"
                            onClick={() => {
                              setSelectedQuizID(parseInt(selectedQuizID + 1))
                            }}
                          >Next
                          </button>
                        </div>

                      </div>

                    </div>


                  </div>
                </>
              }
            </FullScreen>

            <div className="text-center mb-3">
              <Button variant="primary" onClick={handleShow}>
                Show Score
                </Button>
            </div>
          </div>
          <div className="col-md-4  mt-md-4">
          </div>
        </div>
      </div>
      <ScoreCard
        handleShow={handleShow}
        handleClose={handleClose}
        show={state.show}
        count={count}
      />
    </>
  );

}

export default CQuizExam;
