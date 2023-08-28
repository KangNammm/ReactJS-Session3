import { Component, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Lifecycle_Comp from "./components/Lifecycle_Comp";
import FormControlled from "./components/FormControlled";
import Excersices10_Login from "./components/Excersices10/Excersices10_Login";
import Excersices10_Register from "./components/Excersices10/Excersices10_Register";
import Excersices11 from "./components/Excersices11/Excersices11";
// import Excersices13 from './components/Excersice 13/Excersices13'
import Excersices14 from "./components/Excersices14/Excersices14";

class App extends Component {
  constructor(props) {
    super(props);
    // khai báo state
    this.state = {
      show: false,
      company: "Rikkei Academy",
      showForm: false, // state để quyết đijnh trạng thái của form
    };
  }

  handleShow = (e) => {
    console.log("event", e); // event là một sự kiện mặc định được JS tạo ra khi có sự kiện từ người dùng
    this.setState({
      show: !this.state.show,
    });
  };

  render() {
    return (
      <>
        {/* <button onClick={this.handleShow}>Show</button>
         <button onClick={() => this.setState({
           company: "Rikkei Soft"
         })}> Change Props</button>
         {this.state.show === true ? (
           <Lifecycle_Comp company={this.state.company} />
         ) : (
           <></>
         )} */}
        {/* <button onClick={() => !this.state.showForm: <FormControlled/>}>Show Form</button> */}

        {/* <Excersices10_Login/> */}
        {/* <Excersices10_Register/> */}
        {/* <Excersices11/> */}
        {/* <Excersices13/> */}
        <Excersices14 />
      </>
    );
  }
}

export default App;
