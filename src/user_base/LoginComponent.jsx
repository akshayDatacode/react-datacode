import React, { Component } from "react";
import fire from "../config/fire";
import "../assets/css/login.css";
import { Helmet } from "react-helmet";

class LoginComponent extends Component {
  state = {
    email: "",
    password: "",
    errMessage: "",
    successMessage: "",
  };
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  login = (e) => {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {
        this.setState({ successMessage: u.message });
      })
      .catch((err) => {
        this.setState({ errMessage: err.message });
      });
  };

  signup = (e) => {
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {
        this.setState({ errMessage: u.message });
      })
      .catch((err) => {
        this.setState({ errMessage: err.message });
      });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <>
        <Helmet>
          <title>Datacode | Login</title>
        </Helmet>
        <div className="row">
          <div className="col">
            <form id="loginform">
              <h4 className="text-center" style={{ color: "#072C71" }}>
                <b>Start Learning with!</b>
              </h4>
              <img
                id="imag"
                src={require("../assets/images/datacodelogo.jpeg")}
              />
              <div className="form-group">
                <label id="lable">Enter Email address</label>

                <input
                  name="email"
                  type="email"
                  id="logininput"
                  className="loginform"
                  onChange={this.handleChange}
                  value={this.state.email}
                />
              </div>
              <div className="form-group">
                <label id="lable">Enter Password</label>

                <input
                  name="password"
                  type="password"
                  id="logininput"
                  onChange={this.handleChange}
                  value={this.state.password}
                />
              </div>
              <div className="row">
                <div className="col-6">
                  <button
                    id="buttons"
                    type="submit"
                    className="btn btn-success btn-block"
                    onClick={this.signup}
                  >
                    Signup
                  </button>
                </div>
                <div className="col-6">
                  <button
                    id="buttons"
                    type="submit"
                    className="btn btn-primary btn-block"
                    onClick={this.login}
                  >
                    login
                  </button>
                </div>
              </div>

              <div>
                {" "}
                <p id="p" className=" mt-3 text-danger">
                  {this.state.errMessage}
                </p>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default LoginComponent;
