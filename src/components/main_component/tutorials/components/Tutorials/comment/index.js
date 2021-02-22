import Comment from "./Comment";

import { connect } from "react-redux";

import { commentTutorial } from "../../../actions";

const mapStateToProps = ({ tutorial, user }) => ({
  tutorialsList: tutorial.tutorialsList,
  userData: user.currentUser && user.currentUser.data,
});

const mapDispatchToProps = {
  commentTutorial,
};

export default connect(mapStateToProps, mapDispatchToProps)(Comment);
