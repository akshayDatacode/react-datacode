import MyProfile from "./MyProfile";

import { connect } from "react-redux";

import { getUserProfile } from "../../../actions";

const mapStateToProps = ({ app, user }) => ({
  userProfile: user.userProfile,
  userProfileLoading: user.userProfileLoading,
});

const mapDispatchToProps = {
  getUserProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(MyProfile);
