import EditProfile from "./EditProfile";

import { connect } from "react-redux";

import {
  getUserProfile,
  editUserProfile,
  setUserImgDetails,
  // setUserProfile,
} from "../../../actions";

const mapStateToProps = ({ app, user }) => ({
  userProfile: user.userProfile,
  userProfileLoading: user.userProfileLoading,
});

const mapDispatchToProps = {
  getUserProfile,
  editUserProfile,
  setUserImgDetails,
  // setUserProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
