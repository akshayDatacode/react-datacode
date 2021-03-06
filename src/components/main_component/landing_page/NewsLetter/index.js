import NewsLetter from "./NewsLetter";

import { connect } from "react-redux";

import { newsLetterSubscribe } from "../../../../app/actions";

const mapStateToProps = ({ user, app }) => ({
  userProfile: user.userProfile,
  addSubscribeLoading: app.addSubscribeLoading,
});

const mapDispatchToProps = {
  newsLetterSubscribe,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsLetter);
