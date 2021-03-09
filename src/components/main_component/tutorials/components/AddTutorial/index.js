import AddTutorial from "./AddTutorial";

import { connect } from "react-redux";
import {
  addTutorial,
  getTutorialByUserName,
  editTutorial,
  linkPreview,
} from "../../actions";

const mapStateToProps = ({ tutorial, user }) => ({
  tutorialByUser: tutorial.tutorialByUser,
  currentUser: user.currentUser ? user.currentUser : {},
  tutorialListLoading: tutorial.tutorialListLoading,
  addTutorialLoading: tutorial.addTutorialLoading,
});

const mapDispatchToProps = {
  addTutorial,
  editTutorial,
  getTutorialByUserName,
  linkPreview,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTutorial);
