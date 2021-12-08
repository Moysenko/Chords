import React, {useState} from "react";
import {Link} from "react-router-dom";
import search_icon from "../assets/search_icon.svg";
import guitar_back from "../assets/background.jpg";
import "./BasePage.css"

export function BasePage(props) {
    const {isLogin, user, setIsLogin} = props;

    const {search} = window.location;
    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');

    if (isLogin && !user) {
        return (<></>);
    }

    return (
        <>
            <div className="background"/>
            <div className="background_image">
                <img src={guitar_back}/>
            </div>
            <div className="nav-bar">
                <Link to="/"
                      className="web_title valign-text-middle alfaslabone-normal-muddy-waters-50px"> Chords </Link>
                <div className="right-nav-pannel">
                    {isLogin ? (
                        <>
                            <div className="nav-username">
                                Logged in as <font color="#8b4513">{user.username}</font>
                            </div>

                            <div className="nav-bar-button">
                                <Link
                                    to="/add_song"
                                    className="navbar_button_link raleway-normal-black-20px"
                                >
                                    Add song
                                </Link>
                            </div>

                            <div className="nav-bar-button">
                                <Link to="/log_out" className="navbar_button_link raleway-normal-black-20px"
                                      onClick={async () => {
                                          setIsLogin(false);
                                          window.localStorage.clear();
                                      }}>
                                    Log out
                                </Link>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="nav-bar-button">
                                <Link
                                    to="/log_in"
                                    className="navbar_button_link raleway-normal-black-20px"
                                >
                                    Log in
                                </Link>
                            </div>
                            <div className="nav-bar-button">
                                <Link to="/sign_up" className="navbar_button_link raleway-normal-black-20px">
                                    Sign up
                                </Link>
                            </div>
                        </>
                    )}
                    <div className="search-box">
                        <div className="search-icon">
                            <img src={search_icon}/>
                        </div>

                        <form action={`/search_results/${encodeURIComponent(searchQuery)}`}
                              method="get" autoComplete="true">
                            <input
                                value={searchQuery}
                                onInput={e => setSearchQuery(e.target.value)}
                                type="text"
                                placeholder="Search..."
                                className="searchbar_text raleway-normal-black-15px"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
