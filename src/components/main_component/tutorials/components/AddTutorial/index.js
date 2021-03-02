import AddTutorial from "./AddTutorial";

import { connect } from "react-redux";
import {
  addTutorial,
  getTutorialByUserName,
  editTutorial,
} from "../../actions";

const mapStateToProps = ({ tutorial, user }) => ({
  tutorialByUser: tutorial.tutorialByUser,
  userProfile: user.userProfile ? user.userProfile : {},
  currentUser: user.currentUser ? user.currentUser.data : {},
  tutorialListLoading: tutorial.tutorialListLoading,
  addTutorialLoading: tutorial.addTutorialLoading,
});

const mapDispatchToProps = {
  addTutorial,
  editTutorial,
  getTutorialByUserName,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTutorial);
