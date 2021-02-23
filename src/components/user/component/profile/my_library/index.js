import MyLibrary from "./MyLibrary";

import { connect } from "react-redux";

const mapStateToProps = ({ app, user }) => ({
  userProfile: user.userProfile && user.userProfile,
  userProfileLoading: user.userProfileLoading,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MyLibrary);
