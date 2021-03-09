import HomeComponent from "./HomeComponent";
import { connect } from "react-redux";

import { showFooter, hideFooter } from "../../../app/actions";

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser ? user.currentUser : {},
});

const mapDispatchToProps = {
  showFooter,
  hideFooter,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
