import ContactUs from "./ContactUs";

import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addContactMessage } from "../../../actions";

const mapStateToProps = ({ app }) => ({
  addContactMessageLoading: app.addContactMessageLoading,
});

const mapDispatchToProps = { addContactMessage };

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ContactUs)
);
