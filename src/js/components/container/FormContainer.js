import React, { Component } from "react";
import ReactDOM from "react-dom";
import Input from "../presentational/Input.js";

class FormContainer extends Component {
  constructor() {
    super();

    this.state = {
      first_n: "",
      last_n: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  render() {
    const { first_n } = this.state;
    const { last_n } = this.state;
    return (
   <div>
      <form id="article-form">
        <Input
          text="First Name"
          label="first_n"
          type="text"
          id="first_n"
          value={first_n}
          handleChange={this.handleChange}
        />
      </form>
      <form id="article-form2">
        <Input
          text="Last Name"
          label="last_n"
          type="text"
          id="last_n"
          value={last_n}
          handleChange={this.handleChange}
        />
      </form>
    </div>
    );
  }
}

ReactDOM.render(
  <FormContainer />,
  document.getElementById("create-article-form")
)
export default FormContainer;
