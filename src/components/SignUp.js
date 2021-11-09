import React from "react";
import { NavBar } from "./NavBar";
import guitar_back from "../assets/background.jpg";

export function SignUp() {
  return (
    <SignUpBuilder
      text3="Please, repeat password"
      createAnAccount="Create an account"
      emailBoxProps={emailBoxData}
    />
  );
}

function SignUpBuilder(props) {
  const { text3, createAnAccount, emailBoxProps } = props;

  return (
    <div className="container-center-horizontal">
      <div className="x screen">
        <div className="overlap-group4">
          <div className="overlap-group3">
            <img className="chris-hardy-k-x-opo-unsplash-1" src={guitar_back} />
            <NavBar />
          </div>
          <div className="signup-box">
            <div className="overlap-group2">
              <EmailBox>{emailBoxProps.children}</EmailBox>
              <div className="overlap-group1">
                <div className="rectangle-4"></div>
                <div className="login valign-text-middle alfaslabone-normal-black-30px">
                  Login
                </div>
              </div>
              <div className="password-box">
                <div className="password valign-text-middle alfaslabone-normal-black-30px">
                  Password
                </div>
                <div className="rectangle-5"></div>
                <div className="text-1 valign-text-middle">{text3}</div>
                <div className="rectangle-6"></div>
              </div>
            </div>
            <div className="overlap-group">
              <div className="create-an-account valign-text-middle alfaslabone-normal-white-30px">
                {createAnAccount}
              </div>
            </div>
          </div>
          <div className="sign-up valign-text-middle alfaslabone-normal-muddy-waters-40px">
            Sign Up
          </div>
        </div>
      </div>
    </div>
  );
}

function EmailBox(props) {
  const { children } = props;

  return (
    <div className="email-box">
      <div className="email valign-text-middle alfaslabone-normal-black-30px">
        {children}
      </div>
      <div className="rectangle-4-1"></div>
    </div>
  );
}

const emailBoxData = {
  children: "Email",
};
