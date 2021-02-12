import { connect } from "react-redux";

import AddTutorial from "./AddTutorial";
import { addTutorial } from "../../actions";

const mapStateToProps = ({ user }) => ({
  userError: user.error,
  currentUser: user.currentUser,
});

const mapDispatchToProps = {
  addTutorial,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTutorial);
