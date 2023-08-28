import React, { Component } from 'react'

export default class Excersices13 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            code: "",
        };
    }

    // handle change
    handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value,
        });
    }

    // handle submit
    handleSubmit = (e) => {
        e.preventDefault();
        const newCode = {
            code: this.state.code,
        }
        if (this.state.code == "") {
            alert(" Ma nhan vien khong duoc de trong")
        } else if (this.state.code.length < 8) {
            alert(" Ma nhan vien khong duoc ngan hon 8 ki tu")
        } else if (this.state.code.length > 16) {
            alert("Ma nhan van khong duoc qua 16 ki tu")
        } else if (!(this.state.code == )) {
          alert("Khong dung dinh dang, vui long nhap lai");
        } else {
           alert("Them moi thanh cong"); 
        }
          
    }

  render() {
    return (
      <>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <h2>Employee Code</h2>
          <div className="mb-3">
            <input
              onChange={this.handleChange}
              type="code"
              className="form-control"
              id="code"
              aria-describedby="usernameHelp"
              name="code"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Enter
          </button>
        </form>
      </>
    );
  }
}
