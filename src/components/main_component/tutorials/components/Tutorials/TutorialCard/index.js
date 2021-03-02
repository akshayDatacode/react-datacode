import TutorialCard from "./TutorialCard";

import { connect } from "react-redux";

import { likeTutorial, unlikeTutorial } from "../../../actions";
import { saveToLibrary, unsaveFromLibrary } from "../../../../../user/actions";

const mapStateToProps = ({ tutorial, user }) => ({
  tutorialsList: tutorial.tutorialsList,
  userData: user.currentUser ? user.currentUser.data : {},
  userProfile: user.userProfile ? user.userProfile : {},
});

const mapDispatchToProps = {
  likeTutorial,
  unlikeTutorial,
  saveToLibrary,
  unsaveFromLibrary,
};

export default connect(mapStateToProps, mapDispatchToProps)(TutorialCard);
