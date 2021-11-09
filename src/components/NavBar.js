import React from "react";
import search_icon from "../assets/search_icon.svg";

export function NavBar() {
  return (
    <div className="nav-bar">
      <h1 className="title valign-text-middle alfaslabone-normal-muddy-waters-50px">
        Chords
      </h1>
      <div className="overlap-group1-1">
        <div className="log-in valign-text-middle raleway-normal-black-20px">
          Log in
        </div>
      </div>
      <div className="overlap-group-1">
        <div className="sign-up-1 valign-text-middle raleway-normal-black-20px">
          Sign up
        </div>
      </div>
      <div className="search-box">
        <SearchIcon />
        <div className="textlabel raleway-normal-black-15px">Search...</div>
      </div>
    </div>
  );
}

function SearchIcon() {
  return (
    <div className="search-icon">
      <img className="search-icon-1" src={search_icon} />
    </div>
  );
}
