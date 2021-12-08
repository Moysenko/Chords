import React from 'react';
import "./AddSong.css"
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import { ApiClientService } from '../services/ApiClientService';
import { useParams } from "react-router-dom";
import {fetchSong} from "../actions/songs";

export function UpdateSong() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const params = useParams();

    const default_singer = '';
    const default_song_name = '';
    const default_song_text = '';

    const { song_id } = params;
    const song = useSelector((state) => state.songs.songs[song_id]);
    const [singer, set_singer] = React.useState(default_singer);
    const [song_name, set_song_name] = React.useState(default_song_name);
    const [song_text, set_song_text] = React.useState(default_song_text);

    React.useEffect(() => {
        dispatch(fetchSong(song_id));
    }, []);


    React.useEffect(() => {
        console.log("Song: ", song_id, song);
        if (song) {
            set_singer(song.singer);
            set_song_name(song.song_name);
            set_song_text(song.song_text);
        }
    }, [song]);

    if (!song) {
        return (<> </>);
    }

    const handleClick = async (event) => {
        const request_song = {
            singer,
            song_name: song_name,
            song_text: song_text,
        };
        event.preventDefault();

        const formData = new FormData();
        for (let songKey in request_song) {
            formData.append(songKey, request_song[songKey]);
        }

        const data = await ApiClientService(`songs/${song_id}/`, {
            method: 'PATCH',
            body: formData,
        });

        navigate(`/song/${data.id}`);
    };

    return (
        <form>
            <div className="singer-song-box">
                <div className="singer-box">
                    <label>Singer:</label>
                    <input
                        name='singer' type='text' value={singer}
                        className="singer-input"
                        onChange={(event) => {
                            set_singer(event.target.value);
                        }}
                    />
                </div>
                <div className="song-name-box">
                    <label>Song name:</label>
                    <input
                        name='song-name' type='text' value={song_name}
                        className="song-name-input"
                        onChange={(event) => {
                            set_song_name(event.target.value);
                        }}
                    />
                </div>
            </div>
            <div className="input-song-box">
                <div className="song-title-singer">
                    <label> Lyrics & chords </label>
                </div>

                <textarea
                    name='lyrics' type='text' value={song_text}
                    style={{fontSize: "15px"}} className="song-lyrics"
                    onChange={(event) => {
                        set_song_text(event.target.value);
                    }}
                />
            </div>
            <button type='submit' className="create-song-button alfaslabone-normal-white-25px" onClick={handleClick}>
                Save changes
            </button>
        </form>
    );
}
