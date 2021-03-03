import AddTestimonial from "./AddTestimonial";

import { connect } from "react-redux";
import { showAddTestimonial, addTestimonial } from "../../../../actions";
import { setUserImgDetails } from "../../../../../components/user/actions";

const mapStateToProps = ({ app, user }) => ({
  showTestimonial: app.showTestimonial,
  addTestimonialLoading: app.addTestimonialLoading,
  isShowAddTutorial: app.isShowAddTutorial,
  currentUser: user.currentUser ? user.currentUser.data : {},
  userProfile: user.userProfile ? user.userProfile : {},
  userProfileLoading: user.userProfileLoading,
});

const mapDispatchToProps = {
  showAddTestimonial,
  addTestimonial,
  setUserImgDetails,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTestimonial);
