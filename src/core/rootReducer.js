import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import userReducer from "../components/user/reducers";
import quizTestReducer from "../components/quiz_board/reducers";
import appReducer from "../app/reducers";

export default combineReducers({
  form: formReducer,
  user: userReducer,
  quizTest: quizTestReducer,
  app: appReducer,
});
