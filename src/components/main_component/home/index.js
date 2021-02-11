import HomeComponent from "./HomeComponent";
import { connect } from "react-redux";

import { showFooter, hideFooter } from "../../../app/actions";

const mapDispatchToProps = {
  showFooter,
  hideFooter,
};

export default connect(null, mapDispatchToProps)(HomeComponent);
