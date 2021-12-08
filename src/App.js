import React from "react";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import {BasePage} from "./components/BasePage";
import {MainPage} from "./components/MainPage"
import {SongPage} from "./components/SongPage";
import {SearchResults} from "./components/SearchResults";
import {SignUp} from "./components/SignUp";
import {LogIn} from "./components/LogIn";
import {AddSong} from "./components/AddSong";
import {UpdateSong} from "./components/UpdateSong";
import { ApiClientService } from './services/ApiClientService';

export function App() {
    const [user, setUser] = React.useState(null);
    const [isLogin, setIsLogin] = React.useState(
        window.localStorage.getItem('ACCESS')
    );

    const fetchUser = async () => {
        const user = await ApiClientService('user/current/');
        setUser(user);
    };

    React.useEffect(() => {
        if (isLogin) {
            void fetchUser();
        }
    }, [isLogin]);

    return (
        <>
            <Router>
                <BasePage isLogin={isLogin} user={user} setIsLogin={setIsLogin}/>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/Chords" element={<Navigate to='/' />} />
                    <Route path="/search_results/:searchQuery" element={<SearchResults/>}/>
                    <Route path="/sign_up" element={<SignUp setIsLogin={setIsLogin}/>}/>
                    <Route path="/log_in" element={<LogIn setIsLogin={setIsLogin}/>}/>
                    <Route path="/song/:songId" element={<SongPage isLogin={isLogin} user={user}/>}/>
                    <Route path='/log_out' element={<Navigate to='/' />} />
                    <Route path='/add_song' element={<AddSong user={user} />} />
                    <Route path='/update_song/:song_id' element={<UpdateSong user={user} />} />
                </Routes>
            </Router>
        </>
    );
}
