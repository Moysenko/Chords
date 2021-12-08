import React from 'react';
import "./AddSong.css"
import {useNavigate} from 'react-router-dom';
import { ApiClientService } from '../services/ApiClientService';

export function AddSong(props) {
    const {user} = props;
    const navigate = useNavigate();

    const default_singer = '';
    const default_song_name = '';
    const default_song_text = '';
    const views = 0;

    const [singer, set_singer] = React.useState(default_singer);
    const [song_name, set_song_name] = React.useState(default_song_name);
    const [song_text, set_song_text] = React.useState(default_song_text);

    const handleClick = async (event) => {
        const song = {
            singer,
            song_name: song_name,
            song_text: song_text,
            views,
            user
        };
        event.preventDefault();

        const formData = new FormData();
        for (let songKey in song) {
            formData.append(songKey, song[songKey]);
        }

        const data = await ApiClientService('songs/', {
            method: 'POST',
            body: formData,
        });

        console.log(data);

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
                <div className="lyrics-and-chords">
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
                Upload song!
            </button>
        </form>
    );
}
