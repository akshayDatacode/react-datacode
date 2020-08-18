import React, { Component } from "react";
import fire from "../config/fire";
import "../assets/css/login.css";

class LoginComponent extends Component {
  state = {
    email: "",
    password: "",
    errMessage: "",
    successMessage: "",
  };
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
        <div className="row">
          <div className="col">
            <h1 id="welcome-heading">You are welcome to our Learning Community</h1>
            <form id="loginform">
              <img
                id="imag"
                src={require("../assets/images/datacodelogo.jpeg")}
              />
              <div className="form-group">
                <label>Enter Email address</label>

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
                <label>Enter Password</label>

                <input
                  name="password"
                  type="password"
                  id="logininput"
                  onChange={this.handleChange}
                  value={this.state.password}
                />
              </div>

              <button
                id="buttons"
                type="submit"
                className="btn btn-success btn-block"
                onClick={this.signup}
              >
                Signup
              </button>
              <button
                id="buttons"
                type="submit"
                className="btn btn-primary btn-block"
                onClick={this.login}
              >
                login
              </button>
              <div>
                {" "}
                <p className=" mt-3 text-danger">{this.state.errMessage}</p>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default LoginComponent;
