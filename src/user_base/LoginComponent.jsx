import React, { Component } from "react";
import fire from "../config/fire";

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
        console.log(u);
        this.setState({ successMessage: u.message });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ errMessage: err.message });
      });
  };

  signup = (e) => {
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {
        console.log(u);
        this.setState({ errMessage: u.message });
      })
      .catch((err) => {
        console.log(err);
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
          <div className="col text-center">
            <form>
              <input
                name="email"
                type="email"
                id="email"
                placeholder="Enter Email"
                onChange={this.handleChange}
                value={this.state.email}
              />
              <input
                name="password"
                type="password"
                id="password"
                onChange={this.handleChange}
                placeholder="Enter Password"
                value={this.state.password}
              />
              <div className="btn btn-primary" onClick={this.login}>
                Login
              </div>
              <div className="btn btn-success" onClick={this.signup}>
                Sign Up
              </div>
              <div>
                {" "}
                <h3 className="text-danger">{this.state.errMessage}</h3>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default LoginComponent;
