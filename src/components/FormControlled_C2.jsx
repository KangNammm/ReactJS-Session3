import React, { Component } from "react";

export default class FormControlled_C2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      dateOfBirth: "",
      email: "",
      password: "",
    };
  }

    
    // ham lang nghe su thay doi trong o input
    handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;

        // cú pháp này giúp ta nhập đến đâu thì sẽ ăn giá trị ở ô input đến đó
        this.setState({
            [name]: value,
        })
        // cap nhat lai state
        // if (name == "userName") {
        //   this.setState({
        //     userName: value,
        //   });
        // } else if (dateOfBirth == "dateOfBirth") {
        //   this.setState({
        //     dateOfBirth: value,
        //   });
        // }else if(email == "email ") {
        //     this.setState({
        //         email: value,
        //     });
        // }else{
        //     this.setState({
        //         password: value,
        //     });
        // }
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
              onChange={this.handleChange}
              className="form-control"
              id="username"
              name="userName"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="dateOfBirth" className="form-label">
              DateOfBirth
            </label>
            <input
              type="date"
              onChange={this.handleChange}
              className="form-control"
              id="dateOfBirth"
              name="dateOfBirth"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="text"
              onChange={this.handleChange}
              className="form-control"
              id="email"
              name="email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              onChange={this.handleChange}
              className="form-control"
              id="password"
              name="password"
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
