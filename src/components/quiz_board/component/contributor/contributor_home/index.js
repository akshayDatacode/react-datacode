import ContributorHome from "./ContributorHome";
import { connect } from "react-redux";

import { getQuizTestsList } from "../../../actions";

// const mapStateToProps = ({ quizTest }) => ({

// });

const mapDispatchToProps = {
  getQuizTestsList,
};

export default connect(null, mapDispatchToProps)(ContributorHome);
