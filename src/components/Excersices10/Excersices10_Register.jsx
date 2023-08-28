import React, { Component } from 'react'

export default class Excersices10_Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            password: "",
            confirmPassword: "",
            email: "",
        };
    }

    // lang nghe su thay doi
    handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value,
        });
    }

    // ham xu li gui du lieu
    handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            userName: this.state.userName,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword,
            email: this.state.email,
        }
        console.log("New", newUser);
    }
    render() {
    return (
      <>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <h2>Register Account</h2>
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
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password
            </label>
            <input
              onChange={this.handleChange}
              type="password"
              className="form-control"
              id="confirmPassword"
              name="confirmPassword"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              onChange={this.handleChange}
              type="email"
              className="form-control"
              id="email"
              name="email"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </form>
      </>
    );
  }
}
