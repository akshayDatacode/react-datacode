import LandingPage from "./LandingPage";

import { connect } from "react-redux";

import { showFooter, hideFooter } from "../../../app/actions";

const mapDispatchToProps = {
  showFooter,
  hideFooter,
};

export default connect(null, mapDispatchToProps)(LandingPage);
