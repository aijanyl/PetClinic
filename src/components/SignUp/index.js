import React, { Component } from "react";
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
} from "./SignupElements";
const axios = require("axios");

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      first_name: "",
      last_name: "",
      password: "",
      password2: "",
    };
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  handleSubmit(event) {
    axios
      .post("http://petclinic.pythonanywhere.com/api/v1/doctor/registration/", {
        username: this.state.username,
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        password: this.state.password,
        password2: this.state.password2,
      })
      .then(function (res) {
        console.log(res);
        localStorage.setItem("token", res.data.access);
        localStorage.setItem("user", res.config.data);
      })
      .catch(function (err) {
        console.log(err);
      });
    event.preventDefault();
  }
  render() {
    return (
      <>
        <Container>
          <FormWrap>
            <FormContent>
              <Form action="#">
                <FormH1>Sign Up</FormH1>
                <FormLabel htmlFor="for">User Name</FormLabel>
                <FormInput type="username" required />
                <FormLabel htmlFor="for">First Name</FormLabel>
                <FormInput type="first_name" required />
                <FormLabel htmlFor="for">Last Name</FormLabel>
                <FormInput type="last_name" required />
                <FormLabel htmlFor="for">Password</FormLabel>
                <FormInput type="password" required />
                <FormButton type="submit">Continue</FormButton>
                <Text>Forgot password</Text>
              </Form>
            </FormContent>
          </FormWrap>
        </Container>
      </>
    );
  }
}
