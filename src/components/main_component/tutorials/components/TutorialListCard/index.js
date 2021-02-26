import TutorialListCard from "./TutorialListCard";
import { connect } from "react-redux";

import { likeTutorial, unlikeTutorial, removeTutorial } from "../../actions";
import { saveToLibrary, unsaveFromLibrary } from "../../../../user/actions";

const mapStateToProps = ({ tutorial, user }) => ({
  tutorialsList: tutorial.tutorialsList,
  userData: user.currentUser && user.currentUser.data,
  userProfile: user.userProfile && user.userProfile,
});

const mapDispatchToProps = {
  likeTutorial,
  unlikeTutorial,
  saveToLibrary,
  unsaveFromLibrary,
  removeTutorial,
};

export default connect(mapStateToProps, mapDispatchToProps)(TutorialListCard);
