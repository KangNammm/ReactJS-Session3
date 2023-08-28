import React, { Component } from 'react'

export default class Excersices11 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            password: "",
            email: "",
        }
    }

    // ham lang nghe su thay doi
    handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            userName: this.state.userName,
            password: this.state.password,
            email: this.state.email,
        };
        console.log("New User", newUser);
        if (this.state.userName == "") {
            alert(" Ten khong duoc de trong")
        } else if (this.state.password == "") {
            alert(" Mat khau khong duoc de trong")
        } else if (this.state.email == "") {
            alert(" Email khong duoc de trong")
        }
    }
  render() {
    return (
      <>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <h1>Sign Up</h1>
          <div className="mb-3">
            <input
              onChange={this.handleChange}
              type="text"
              className="form-control"
              id="userName"
              name="userName"
              placeholder="User Name"
            />
          </div>
          <div className="mb-3">
            <input
              onChange={this.handleChange}
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Password"
            />
          </div>
          <div className="mb-3">
            <input
              onChange={this.handleChange}
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              name="email"
              placeholder="Email"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Join
          </button>
        </form>
      </>
    );
  }
}
