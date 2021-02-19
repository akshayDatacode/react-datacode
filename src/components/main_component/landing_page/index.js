import LandingPage from "./LandingPage";

import { connect } from "react-redux";

import { showFooter, hideFooter } from "../../../app/actions";

const mapStateToProps = ({ user }) => ({
  userProfile: user.userProfile,
});

const mapDispatchToProps = {
  showFooter,
  hideFooter,
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
