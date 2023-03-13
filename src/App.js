import React from "react";
import "./style.css";

class PasswordValidationForm extends React.Component {
  constructor() {
    super();
    this.state = {
      input: {},
      errors: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;

    this.setState({
      input
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.validate()) {
      console.log(this.state);

      let input = {};
      
      input["password"] = "";
      input["confirm_password"] = "";
      this.setState({ input: input });

      alert("Form is submitted");
    }
  }

  validate() {
    let input = this.state.input;
    let errors = {};
    let isValid = true;   

    if (!input["email"]) {
      isValid = false;
      errors["email"] = "Please enter your email";
    }

    if (!input["password"]) {
      isValid = false;
      errors["password"] = "Please enter your password";
    }

    if (!input["confirm_password"]) {
      isValid = false;
      errors["confirm_password"] = "Please enter your confirm password";
    }

    if (typeof input["password"] !== "undefined") {
      if (input["password"].length < 6) {
        isValid = false;
        errors["password"] = "Please add at least 6 charachter";
      }
    }

    if (
      typeof input["password"] !== "undefined" &&
      typeof input["confirm_password"] !== "undefined"
    ) {
      if (input["password"] != input["confirm_password"]) {
        isValid = false;
        errors["confirm_password"] = "Passwords don't match";
      }
    }

    this.setState({
      errors: errors
    });

    return isValid;
  }

  render() {
    return (
      <div class="main-div">
        <h5>
        Registration Page
        </h5>
        <form onSubmit={this.handleSubmit}>         

        <div class="form-group">
            <label for="password">Email</label>
            <input
              type="email"
              name="email"
              value={this.state.input.email}
              onChange={this.handleChange}
              class="form-control"
              placeholder="Enter email"
              id="email"
            />

            <div className="text-danger">{this.state.errors.email}</div>
          </div>

          <div class="form-group">
            <label for="password">New Password</label>
            <input
              type="password"
              name="password"
              value={this.state.input.password}
              onChange={this.handleChange}
              class="form-control"
              placeholder="Enter password"
              id="password"
            />

            <div className="text-danger">{this.state.errors.password}</div>
          </div>

          <div class="form-group">
            <label for="password">Re-enter New Password:</label>
            <input
              type="password"
              name="confirm_password"
              value={this.state.input.confirm_password}
              onChange={this.handleChange}
              class="form-control"
              placeholder="Enter confirm password"
              id="confirm_password"
            />

            <div className="text-danger">
              {this.state.errors.confirm_password}
            </div>
          </div>

          <input
            type="submit"
            value="Create account"
            class="btn btn-success submit_btn"
          />
        </form>
      </div>
    );
  }
}

export default PasswordValidationForm;