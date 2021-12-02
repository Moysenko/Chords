import React, {useState} from "react";
import {Link} from "react-router-dom";
import search_icon from "../assets/search_icon.svg";
import guitar_back from "../assets/background.jpg";
import "./BasePage.css"

export function BasePage() {
    const {search} = window.location;
    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');

    return (
        <>
            <div className="background"/>
            <div className="background_image">
                <img src={guitar_back}/>
            </div>
            <div className="nav-bar">
                <Link to="/"
                      className="web_title valign-text-middle alfaslabone-normal-muddy-waters-50px"> Chords </Link>
                <div className="log_in-button">
                    <Link
                        to="/log_in"
                        className="navbar_button_link raleway-normal-black-20px"
                    >
                        Log in
                    </Link>
                </div>
                <div className="sign_up-button">
                    <Link to="/sign_up" className="navbar_button_link raleway-normal-black-20px">
                        Sign up
                    </Link>
                </div>
                <div className="search-box">
                    <div className="search-icon">
                        <img src={search_icon}/>
                    </div>

                    <form action="/search_results/" method="get" autoComplete="true">
                        <input
                            value={searchQuery}
                            onInput={e => setSearchQuery(e.target.value)}
                            type="text"
                            placeholder="Search..."
                            className="searchbar_text raleway-normal-black-15px"
                            name="s"
                        />
                    </form>
                </div>
            </div>
        </>
    );
}
