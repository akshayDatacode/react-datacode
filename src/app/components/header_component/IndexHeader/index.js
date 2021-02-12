import IndexHeader from "./IndexHeader";

import { connect } from "react-redux";

const mapStateToProps = ({ app }) => ({
  isShowAddTutorial: app.isShowAddTutorial,
});

export default connect(mapStateToProps, null)(IndexHeader);
