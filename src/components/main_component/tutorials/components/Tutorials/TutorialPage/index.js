import TutorialPage from "./TutorialPage";

import { connect } from "react-redux";

import {
  likeTutorial,
  unlikeTutorial,
  getTutorialById,
} from "../../../actions";

const mapStateToProps = ({ tutorial, user }) => ({
  tutorialsList: tutorial.tutorialsList,
  userData: user.currentUser && user.currentUser.data,
});

const mapDispatchToProps = {
  likeTutorial,
  unlikeTutorial,
  getTutorialById,
};

export default connect(mapStateToProps, mapDispatchToProps)(TutorialPage);
