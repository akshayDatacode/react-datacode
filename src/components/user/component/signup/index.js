import Signup from "./Signup";
import { connect } from "react-redux";

import { signupUser, googleLogin } from "../../actions";

const mapStateToProps = ({ user }) => ({
  userError: user.error,
  signupUserLoading: user.signupUserLoading,
});

const mapDispatchToProps = {
  signupUser,
  googleLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
