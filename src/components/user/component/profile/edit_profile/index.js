import EditProfile from "./EditProfile";

import { connect } from "react-redux";

import {
  getUserProfile,
  editCurrentUser,
  setUserImgDetails,
  // setUserProfile,
} from "../../../actions";

const mapStateToProps = ({ app, user }) => ({
  userProfileLoading: user.userProfileLoading,
  currentUser: user.currentUser ? user.currentUser : {},
});

const mapDispatchToProps = {
  getUserProfile,
  editCurrentUser,
  setUserImgDetails,
  // setUserProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
