import TutorialPage from "./TutorialPage";

import { connect } from "react-redux";

import {
  likeTutorial,
  unlikeTutorial,
  getTutorialById,
} from "../../../actions";
import { saveToLibrary, unsaveFromLibrary } from "../../../../../user/actions";

const mapStateToProps = ({ tutorial, user }) => ({
  tutorial: tutorial.tutorial,
  userData: user.currentUser && user.currentUser.data,
});

const mapDispatchToProps = {
  likeTutorial,
  unlikeTutorial,
  getTutorialById,
  saveToLibrary,
  unsaveFromLibrary,
};

export default connect(mapStateToProps, mapDispatchToProps)(TutorialPage);
