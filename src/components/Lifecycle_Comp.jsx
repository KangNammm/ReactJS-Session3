import React, { Component } from 'react'

export default class Lifecycle_Comp extends Component {
    constructor(props) {
        super(props);
        console.log("Component duoc khoi tao");
        this.state = {
          className: "JAV-230630",
        };
    }

    componentWillMount() {
        console.log("Component Will Mount");
    }

    componentDidMount() {
        console.log("Component Did Mount");
    }

    componentWillReceiveProps(newProps) {
        console.log("Component Will Receive Props duoc chay, luc nay props moi la:", newProps);
    }

    shouldComponentUpdate() {
        return true; // mặc định hàm này return là true
    }

    componentWillUpdate() {
        console.log("Component Will Update duoc chay");
    }


    componentDidUpdate() {
        console.log("Component Did Update duoc goi");
    }

    componentWillUnmount() {
        console.log("Component Will Unmount "); // thường được sử dụng để clean sự kiện
    }

    render() {
      console.log("Component duoc render");
      return (
        <>
              <h1>tên công ty ở component con: {this.props.company}</h1>
              <h2>Ten lop: {this.state.className}</h2>
              <button onClick={() => this.setState({
                  className: "HN-JAV-230630",
              })}>Change State</button>
        </>
      );
  }
}
