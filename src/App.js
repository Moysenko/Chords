import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {BasePage} from "./components/BasePage";
import {MainPage} from "./components/MainPage"
import {SongPage} from "./components/SongPage";
import {SearchResults} from "./components/SearchResults";
import {SignUp} from "./components/SignUp";
import {LogIn} from "./components/LogIn";

export function App() {
    return (
        <>
            <Router>
                <BasePage/>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/Chords" element={<MainPage/>}/>
                    <Route path="/search_results" element={<SearchResults/>}/>
                    <Route path="/sign_up" element={<SignUp/>}/>
                    <Route path="/log_in" element={<LogIn/>}/>
                    <Route path="/song_page" element={<SongPage/>}/>
                </Routes>
            </Router>
        </>
    );
}
