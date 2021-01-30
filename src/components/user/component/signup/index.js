import Signup from "./Signup";
import { connect } from "react-redux";

import { signupUser } from "../../actions";

const mapStateToProps = ({ user }) => ({
  userError: user.error,
});

const mapDispatchToProps = {
  signupUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
