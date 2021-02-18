import EditProfile from "./EditProfile";

import { connect } from "react-redux";

import {
  getUserProfile,
  editUserProfile,
  // setUserProfile,
} from "../../../actions";

const mapStateToProps = ({ app, user }) => ({
  userProfile: user.userProfile,
  getUserProfileLoading: user.getUserProfileLoading,
});

const mapDispatchToProps = {
  getUserProfile,
  editUserProfile,
  // setUserProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
