import React, { Component } from "react";

export default class FormControlled extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            dateOfBirth: "",
            email: "",
            password: "",
        };
    }

    // hàm xử lí gửi dũ liệu
    handleSubmit = (e) => {
        // ngan chan su kien submit cua form
        e.preventDefault();
        // doi tuong newUser
        const newUser = {
          userName: this.state.userName,
          dateOfBirth: this.state.dateOfBirth,
          email: this.state.email,
          password: this.state.password,
        };
        console.log("New User", newUser);
    }


    render() {
      console.log("User Name", this.state.userName);
    return (
      <div>
        <form onSubmit={(e)=> this.handleSubmit(e)}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              UserName
            </label>
            <input
              value={this.state.userName}
              onChange={(e) => this.setState({ userName: e.target.value })}
              className="form-control"
              id="username"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="dateOfBirth" className="form-label">
              DateOfBirth
            </label>
            <input
              type="date"
              value={this.state.dateOfBirth}
              onChange={(e) => this.setState({ dateOfBirth: e.target.value })}
              className="form-control"
              id="dateOfBirth"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="text"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
              className="form-control"
              id="email"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="password"
              value={this.state.password}
              onChange={(e) => this.setState({ password: e.target.value })}
              className="form-label"
            >
              Password
            </label>
            <input type="password" className="form-control" id="password" />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
