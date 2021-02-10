import CreateQuestion from "./CreateQuestion";
import { connect } from "react-redux";

import { addQuestion } from "../../../../actions";

const mapStateToProps = ({ quizTest }) => ({
  currentQuizTest: quizTest.currentQuizTest,
  quizQuestions: quizTest.quizQuestions,
});

// const mapDispatchToProps = {
//   addQuestion,
// };

export default connect(mapStateToProps, null)(CreateQuestion);