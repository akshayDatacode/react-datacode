import CreateQuiz from "./CreateQuiz";
import { connect } from "react-redux";

import { createQuizTest } from "../../../../../actions";

const mapStateToProps = ({ user, quizTest}) => ({
  userError: user.error,
  currentUser: user.currentUser,
  currentQuizTest: quizTest.currentQuizTest,
});

const mapDispatchToProps = {
  createQuizTest,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateQuiz);
