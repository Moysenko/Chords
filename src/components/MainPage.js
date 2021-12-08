import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchSongs, fetchSongsMore, fetchSong} from '../actions/songs';
import {Link} from "react-router-dom";
import "./MainPage.css"

export function MainPage() {
    const dispatch = useDispatch();
    const songList = useSelector((state) => state.songs.songList);
    const count = useSelector((state) => state.songs.count);
    const isError = useSelector((state) => state.songs.isError);

    const ordering_query = "ordering=-views";

    React.useEffect(() => {
        dispatch(fetchSongs(ordering_query));
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
                    <SongCard id={songId} key={songId}/>
                ))}
                {songList.length < count && (
                    <div className='song-card-box'>
                        <div
                            className='raleway-normal-ship-gray-15px show-more-button'
                            onClick={() => dispatch(fetchSongsMore(ordering_query))}
                        >
                            Show more
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

function SongCard(props) {
    const { id } = props;
    const song = useSelector((state) => state.songs.songs[id]);

    return (
        <Link to={`/song/${song.id}`}>
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
