import AddTutorial from "./AddTutorial";

import { connect } from "react-redux";
import { addTutorial, getTutorialByUserName } from "../../actions";

const mapStateToProps = ({ tutorial, user }) => ({
  tutorialsList: tutorial.tutorialsList,
  userProfile: user.userProfile && user.userProfile,
  currentUser: user.currentUser && user.currentUser.data,
});

const mapDispatchToProps = {
  addTutorial,
  getTutorialByUserName,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTutorial);
