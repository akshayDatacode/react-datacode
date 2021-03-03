import OurStory from "./OurStory";

import { connect } from "react-redux";
import { showAddTestimonial } from "../../../actions";

const mapStateToProps = ({ app, user }) => ({
  isShowAddTutorial: app.isShowAddTutorial,
  currentUser: user.currentUser ? user.currentUser.data : {},
  userProfile: user.userProfile,
  userProfileLoading: user.userProfileLoading,
});

const mapDispatchToProps = {
  showAddTestimonial,
};

export default connect(mapStateToProps, mapDispatchToProps)(OurStory);
