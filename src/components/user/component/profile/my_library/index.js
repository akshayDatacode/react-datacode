import MyLibrary from "./MyLibrary";

import { connect } from "react-redux";

const mapStateToProps = ({ app, user }) => ({
  userProfileLoading: user.userProfileLoading,
  currentUser: user.currentUser ? user.currentUser : {},
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MyLibrary);
