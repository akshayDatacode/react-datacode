import CreateQuizSettings from "./CreateQuizSettings";
import { connect } from "react-redux";

import { createQuizTest } from "../../../../actions";

const mapStateToProps = ({ user }) => ({
  userError: user.error,
  currentUser: user.currentUser,
});

const mapDispatchToProps = {
  createQuizTest,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateQuizSettings);
