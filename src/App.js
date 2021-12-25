import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import SigninPage from "./pages/signin";
import AboutUs from "./components/About Us/AboutUs";
import Signup from "./components/SignUp";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs/ContactUs";
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SigninPage} exact />
        <Route path="/signup" component={Signup} exact />
        <Route path="/contactus" component={ContactUs} exact />
        <Route path="/aboutus" component={AboutUs} exact />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
