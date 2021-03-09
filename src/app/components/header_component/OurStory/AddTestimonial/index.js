import AddTestimonial from "./AddTestimonial";

import { connect } from "react-redux";
import {
  showAddTestimonial,
  addTestimonial,
  fetchTestimonials,
  editTestimonial,
  setEditTestimonial,
} from "../../../../actions";
import { setUserImgDetails } from "../../../../../components/user/actions";

const mapStateToProps = ({ app, user }) => ({
  showTestimonial: app.showTestimonial,
  addTestimonialLoading: app.addTestimonialLoading,
  isShowAddTutorial: app.isShowAddTutorial,
  currentUser: user.currentUser ? user.currentUser : {},
  userProfileLoading: user.userProfileLoading,
  isEditTestimonial: app.isEditTestimonial,
  editTestimonialData: app.editTestimonialData ? app.editTestimonialData : {},
});

const mapDispatchToProps = {
  showAddTestimonial,
  addTestimonial,
  setUserImgDetails,
  fetchTestimonials,
  editTestimonial,
  setEditTestimonial,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTestimonial);
