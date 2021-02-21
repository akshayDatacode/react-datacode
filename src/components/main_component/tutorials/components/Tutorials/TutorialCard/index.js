import TutorialCard from "./TutorialCard";

import { connect } from "react-redux";

import { likeTutorial, unlikeTutorial } from "../../../actions";

const mapStateToProps = ({ tutorial, user }) => ({
  tutorialsList: tutorial.tutorialsList,
  userName: user.currentUser && user.currentUser.data.userName,
});

const mapDispatchToProps = {
  likeTutorial,
  unlikeTutorial,
};

export default connect(mapStateToProps, mapDispatchToProps)(TutorialCard);
