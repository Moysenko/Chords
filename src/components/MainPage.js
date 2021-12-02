import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchSongs} from '../actions/songs';
import {Link} from "react-router-dom";
import "./MainPage.css"

export function MainPage() {
    const dispatch = useDispatch();
    const songList = useSelector((state) => state.songs.songList);
    const isError = useSelector((state) => state.songs.isError);

    React.useEffect(() => {
        dispatch(fetchSongs());
    }, []);

    if (isError) {
        return (
            <h1>Произошла ошибка!</h1>
        );
    }

    return (
        <>
            <div className="page-title valign-text-middle alfaslabone-normal-muddy-waters-40px">
                Popular
            </div>
            <div className="song-list-header">
                <div className="song-name valign-text-middle raleway-normal-ship-gray-15px">
                    Singer - song name
                </div>
                <div className="clicks-number valign-text-middle raleway-normal-ship-gray-15px">
                    Views
                </div>
            </div>
            <div className="elements-list">
                {songList.map((songId) => (
                    <SongCard id={songId} />
                ))}
                {/*<SongCard singer='Исполнитель' song_name='Название песни' clicks_number='27'/>*/}
            </div>
        </>
    );
}

function SongCard(props) {
    const { id } = props;
    const song = useSelector((state) => state.songs.songs[id]);

    return (
        <Link to="/song_page">
            <div className="song-card-box">
                <div className="song-card">
                    <div className="song-name valign-text-middle raleway-normal-ship-gray-15px">
                        {song.singer} - {song.song_name}
                    </div>
                    <div className="clicks-number valign-text-middle raleway-normal-ship-gray-15px">
                        {song.views}
                    </div>
                </div>
            </div>
        </Link>
    );
}
