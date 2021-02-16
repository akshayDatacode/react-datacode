import TechTutorials from "./TechTutorials";

import { connect } from "react-redux";

import { getTutorialsList } from "../../../actions";

const mapStateToProps = ({ tutorial }) => ({
  tutorialsList: tutorial.tutorialsList,
});

const mapDispatchToProps = {
  getTutorialsList,
};

export default connect(mapStateToProps, mapDispatchToProps)(TechTutorials);
