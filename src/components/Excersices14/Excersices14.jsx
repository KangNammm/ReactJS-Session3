import React, { Component } from "react";

export default class Excersices14 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: "",
      email: "",
      password: "",
      checkbox: "",
      regex: /^NV.*/,
    };
  }

  // ham lang nghe su thay doi trong o input
  handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    // ngan chan load
    e.preventDefault();
    const newUser = {
      code: this.state.code,
      email: this.state.email,
      password: this.state.password,
      checkbox: this.state.checkbox,
    };
    if (this.state.code === "") {
      alert(" Ma khong duoc de trong");
    } else if (!this.state.regex.test(this.state.code)) {
      alert(" Khong dung ma dinh dang");
    } else if (this.state.code.length < 8) {
      alert(" Ma khong duoc nho hon 8 ki tu");
    } else if (this.state.code.length > 16) {
      alert(" Ma khong duoc dai hon 16 ki tu");
    } else if (this.state.email === "") {
      alert(" Email khong duoc de trong");
    } else if (this.state.password.length < 8) {
      alert(" Mat khau khong duoc nho hon 8 ki tu");
    } else {
      alert(" Dang ki thanh cong");
    }
  };
  render() {
    return (
      <>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <h2>Register</h2>
          <div className="mb-3">
            <label htmlFor="code" className="form-label">
              Code
            </label>
            <input
              onChange={this.handleChange}
              type="text"
              className="form-control"
              id="code"
              aria-describedby="usernameHelp"
              name="code"
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
              aria-describedby="usernameHelp"
              name="email"
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
              Check me out
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
