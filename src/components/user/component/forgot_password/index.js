import ForgotPassword from "./ForgotPassword";

import { connect } from "react-redux";

import { forgotPassword } from "../../actions";

const mapDispatchToProps = {
  forgotPassword,
};

export default connect(null, mapDispatchToProps)(ForgotPassword);
