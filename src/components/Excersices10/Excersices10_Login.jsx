import React, { Component } from 'react'

export default class Excersices10_Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            password: "",
            checkbox: "",
        };
    }

    // ham lang nghe su thay doi trong o input
    handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value,
        });
    }

    handleSubmit = (e) => {
        // ngan chan load
        e.preventDefault();
        const newUser = {
            userName: this.state.userName,
            password: this.state.password,
            checkbox: this.state.checkbox,
        }
        console.log(newUser);
    }

    render() {
    return (
      <>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <h2>Account Login</h2>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              UserName
            </label>
            <input
              onChange={this.handleChange}
              type="username"
              className="form-control"
              id="username"
              aria-describedby="usernameHelp"
              name="userName"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              onChange={this.handleChange}
              type="password"
              className="form-control"
              id="password"
              name="password"
            />
          </div>
          <div className="mb-3 form-check">
            <input
              onChange={this.handleChange}
              type="checkbox"
              className="form-check-input"
              id="checkbox"
              name="checkbox"
            />
            <label className="form-check-label" htmlFor="checkbox">
              Remember me
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Log In
          </button>
            </form>
      </>
    );
  }
}
