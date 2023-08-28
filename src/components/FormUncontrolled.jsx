import React, { Component } from "react";

export default class FormUncontrolled extends Component {
  constructor(props) {
    super(props);
    // khai báo tham chiếu cho biến userName
    this.userName = React.createRef();
    // khai báo tham chiếu cho biến date of birth
    this.dateOfBirth = React.createRef();
    // khai báo tham chiếu cho biến email
    this.email = React.createRef();
    // khai báo tham chiếu cho biến pass
    this.password = React.createRef();
  }

  handleSubmit = (e) => {
    // ngan chan su kien submit cua form
    e.preventDefault();
    // doi tuong newUser
    const newUser = {
      userName: this.userName,
      dateOfBirth: this.dateOfBirth,
      email: this.email,
      password: this.password,
    };
    console.log("New User", newUser);
  };

  render() {
    console.log("User Name", this.state.userName);
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              UserName
            </label>
            <input
              className="form-control"
              id="username"
              name="userName"
              ref={this.userName}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="dateOfBirth" className="form-label">
              DateOfBirth
            </label>
            <input
              type="date"
              className="form-control"
              id="dateOfBirth"
              name="dateOfBirth"
              ref={this.dateOfBirth}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="text"
              className="form-control"
              id="email"
              name="email"
              ref={this.email}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              ref={this.password}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
