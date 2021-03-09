import IndexHeader from "./IndexHeader";

import { connect } from "react-redux";
import { logoutUser } from "../../../../components/user/actions";

const mapStateToProps = ({ app, user }) => ({
  isShowAddTutorial: app.isShowAddTutorial,
  currentUser: user.currentUser ? user.currentUser : {},
  userProfileLoading: user.userProfileLoading,
});

const mapDispatchToProps = {
  logoutUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(IndexHeader);
