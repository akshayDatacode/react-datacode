import NewsLetter from "./NewsLetter";

import { connect } from "react-redux";

import { newsLetterSubscribe } from "../../../../app/actions";

const mapStateToProps = ({ user }) => ({
  userProfile: user.userProfile,
});

const mapDispatchToProps = {
  newsLetterSubscribe,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsLetter);
