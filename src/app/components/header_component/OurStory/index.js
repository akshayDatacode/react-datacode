import OurStory from "./OurStory";

import { connect } from "react-redux";
import { showAddTestimonial, fetchTestimonials } from "../../../actions";

const mapStateToProps = ({ app, user }) => ({
  isShowAddTutorial: app.isShowAddTutorial,
  addTestimonialLoading: app.addTestimonialLoading,
  testimonials: app.testimonials ? app.testimonials : [],
  currentUser: user.currentUser ? user.currentUser.data : {},
  userProfile: user.userProfile,
  userProfileLoading: user.userProfileLoading,
});

const mapDispatchToProps = {
  showAddTestimonial,
  fetchTestimonials,
};

export default connect(mapStateToProps, mapDispatchToProps)(OurStory);
