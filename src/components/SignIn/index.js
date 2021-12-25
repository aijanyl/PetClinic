import { render } from "@testing-library/react";
import React from "react";
import { Component } from "react";
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
} from "./SigninElements";
const axios = require("axios");

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  handleSubmit(event) {
    axios
      .post("http://petclinic.pythonanywhere.com/api/v1/rest-auth/login/", {
        username: this.state.username,
        password: this.state.password,
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
            <Icon to="/">Pet Clinic</Icon>
            <FormContent>
              <Form action="#">
                <FormH1>Sign in to your account</FormH1>
                <FormLabel htmlFor="for">User Name</FormLabel>
                <FormInput type="username" required />
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
