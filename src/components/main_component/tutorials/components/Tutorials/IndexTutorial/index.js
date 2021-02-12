import IndexTutorial from "./IndexTutorial";

import { connect } from "react-redux";

import {
  showAddTutorial,
  hideAddTutorial,
} from "../../../../../../app/actions";

const mapDispatchToProps = {
  showAddTutorial,
  hideAddTutorial,
};

export default connect(null, mapDispatchToProps)(IndexTutorial);
