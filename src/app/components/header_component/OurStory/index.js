import OurStory from "./OurStory";

import { connect } from "react-redux";
import {
  showAddTestimonial,
  fetchTestimonials,
  setEditTestimonial,
  deleteTestimonial,
} from "../../../actions";

const mapStateToProps = ({ app, user }) => ({
  isShowAddTutorial: app.isShowAddTutorial,
  addTestimonialLoading: app.addTestimonialLoading,
  testimonials: app.testimonials ? app.testimonials : [],
  currentUser: user.currentUser ? user.currentUser : {},
  userProfileLoading: user.userProfileLoading,
});

const mapDispatchToProps = {
  showAddTestimonial,
  fetchTestimonials,
  setEditTestimonial,
  deleteTestimonial,
};

export default connect(mapStateToProps, mapDispatchToProps)(OurStory);
