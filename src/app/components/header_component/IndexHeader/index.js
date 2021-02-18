import IndexHeader from "./IndexHeader";

import { connect } from "react-redux";
import { logoutUser } from "../../../../components/user/actions";

const mapStateToProps = ({ app, user }) => ({
  isShowAddTutorial: app.isShowAddTutorial,
  currentUser: user.currentUser && user.currentUser.data,
  userProfile: user.userProfile,
});

const mapDispatchToProps = {
  logoutUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(IndexHeader);
