import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import {animateScroll as scroll} from 'react-scroll';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {ApiClientService} from "../services/ApiClientService";

import {fetchSong} from "../actions/songs";
import {fetchChords} from "../actions/chords";

import "./SongPage.css";
import arrow_down from "../assets/arrow_down.svg";
import arrow_up from "../assets/arrow_up.svg";
import minus from "../assets/minus.svg";
import plus from "../assets/plus.svg";


export function SongPage(props) {
    const {isLogin, user} = props;

    const dispatch = useDispatch();
    const params = useParams();

    const [fontSize, setFontSize] = useState(13);
    const [scrollSpeed, setScrollSpeed] = useState(0);

    const {songId} = params;
    const song = useSelector((state) => state.songs.songs[songId]);
    const chords = useSelector((state) => state.chords);

    React.useEffect(() => {
        dispatch(fetchSong(songId));
        dispatch(fetchChords());
    }, []);

    React.useEffect(async () => {
        if (song) {
            const formData = new FormData();
            console.log("Song: ", song);
            formData.append("views", (song.views + 1).toString());

            const data = await ApiClientService(`songs/${songId}/`, {
                method: 'PATCH',
                body: formData,
            })
        }
    }, [song])

    if (!song || !chords || chords.length === 0) {
        return (<> </>);
    }

    function ModifyScroll(delta) {
        const newScrollSpeed = scrollSpeed + delta;
        const scrollOptions = {
            smooth: 'linear',
            containerId: "song-box",
            isDynamic: true,
            duration: function (scrollDistanceInPx) {
                return 200 * scrollDistanceInPx / newScrollSpeed;
            }
        };

        if (newScrollSpeed < 0) {
            scroll.scrollToTop(scrollOptions);
        } else if (newScrollSpeed > 0) {
            scroll.scrollToBottom(scrollOptions);
        } else {
            scroll.scrollTo(0);
        }
        setScrollSpeed(newScrollSpeed);
    }

    const words = song.song_text.split(/\s+/);
    let chord_images = [];

    for (let [chordId, chord] of Object.entries(chords.chords)) {
        if (words.includes(chord.name)) {
            chord_images.push(chord.image)
        }
    }

    return (
        <>
            <div className="view-params">
                <div className="autoscroll-box">
                    <div className="valign-text-middle">
                        Autoscroll speed: {scrollSpeed}
                    </div>
                    <div className="scroll-regulator">
                        <img src={arrow_up} onClick={() => ModifyScroll(-1)}/>
                        <div className="vline"/>
                        <img src={arrow_down} onClick={() => ModifyScroll(1)}/>
                    </div>
                </div>

                <div className="font-control-box">
                    <div className="valign-text-middle">
                        Font size: {fontSize}
                    </div>
                    <div className="font-regulator">
                        <img src={minus} onClick={() => setFontSize(fontSize - 1)}/>
                        <div className="vline"/>
                        <img src={plus} onClick={() => setFontSize(fontSize + 1)}/>
                    </div>
                </div>
            </div>
            <div className="song-box" id="song-box">
                <div className="song-header-box">
                    <div className="song-title-singer">
                        {song.singer} - {song.song_name}
                    </div>

                    {isLogin && (user.id === song.user.id) && (
                        <>
                            <div className="nav-bar-button">
                                <Link to={`/update_song/${song.id}`}
                                      className="navbar_button_link raleway-normal-black-20px">
                                    Edit song
                                </Link>
                            </div>
                        </>
                    )}
                </div>

                {(chord_images) && (
                    <div className="chords-grid">
                        {chord_images.map((chord_image) =>
                            <img src={chord_image} className="chord-pic"/>
                        )}
                    </div>
                )}

                <div style={{fontSize: `${fontSize}px`}} className="song-chords">
                    {song.song_text}
                </div>
            </div>
        </>
    );
}
