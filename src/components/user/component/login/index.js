import Login from "./Login";

import { connect } from "react-redux";

import { loginUser } from "../../actions";

const mapStateToProps = ({ user }) => ({
  userError: user.error,
  currentUser: user.currentUser,
  loginUserLoading: user.loginUserLoading,
});

const mapDispatchToProps = {
  loginUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
