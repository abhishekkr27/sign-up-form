import React from "react";
import "./App.css";

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

      input["email"] = "";
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

    if (typeof input["email"] !== "undefined") {
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(input["email"])) {
        isValid = false;
        errors["email"] = "Please enter valid email address";
      }
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

    if (typeof input["password"] !== "undefined") {
      var pattern2 = new RegExp(/[a-z]/.test("password"));
      if (!pattern2.test(input["password"])) {
        isValid = false;
        errors["password"] = "Please add at least 1 lowercase letter";
      }
    }

    if (typeof input["password"] !== "undefined") {
      var pattern3 = new RegExp(/[A-Z]/.test("password"));
      if (!pattern3.test(input["password"])) {
        isValid = false;
        errors["password"] = "Please add at least 1 uppercase letter";
      }
    }

    if (typeof input["password"] !== "undefined") {
      var pattern4 = new RegExp(/[0-9]/.test("password"));
      if (!pattern4.test(input["password"])) {
        isValid = false;
        errors["password"] = "Please add at least 1 number";
      }
    }

    if (typeof input["password"] !== "undefined") {
      var pattern5 = new RegExp(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test("password"));
      if (!pattern5.test(input["password"])) {
        isValid = false;
        errors["password"] = "Please add at least 1 special character";
      }
    }

    if (typeof input["password"] !== "undefined") {
      var pattern6 = new RegExp(!/(.)\1{1,}/.test("password"));
      if (!pattern6.test(input["password"])) {
        isValid = false;
        errors["password"] = "Must not contain any repeating characters";
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

      <div className="App-container">
        <div className="card">
          <div className="card-header">
            <h4 className="title">Registration Page</h4>
          </div>

          <div className="card-body">
            <form onSubmit={this.handleSubmit}>


              <p className="label">Email</p>
              <input
                type="text"
                name="email"
                value={this.state.input.email}
                onChange={this.handleChange}
                className="input"
                placeholder="Enter email"
                id="email"
              />
              <p className="error-message">{this.state.errors.email}</p>


              <p className="label">New Password</p>
              <input
                type="password"
                name="password"
                value={this.state.input.password}
                onChange={this.handleChange}
                className="input"
                placeholder="Enter password"
                id="password"
              />
              <p className="error-message">{this.state.errors.password}</p>


              <p className="label">Re-enter New Password</p>
              <input
                type="password"
                name="confirm_password"
                value={this.state.input.confirm_password}
                onChange={this.handleChange}
                className="input"
                placeholder="Enter confirm password"
                id="confirm_password"
              />
              <p className="error-message">{this.state.errors.confirm_password}</p>

              <input type="submit" className="btn" value="Create account" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default PasswordValidationForm;