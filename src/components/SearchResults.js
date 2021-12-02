import React from 'react';
import {Link, useParams} from "react-router-dom";
import "./MainPage.css"

export function SearchResults() {
    const {search} = window.location;
    const searchQuery = new URLSearchParams(search).get('s');

    return (
        <>
            <div className="page-title">
                <div style={{marginRight: "10px"}} className="valign-text-middle alfaslabone-normal-muddy-waters-40px">
                    Search results:
                </div>
                <div style={{marginTop: "17px"}}>
                    <div className="valign-text-middle raleway-normal-white-title">
                        {searchQuery}
                    </div>
                </div>
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
                <SongCard singer='Исполнитель' song_name='Название песни' clicks_number='27'/>
                <SongCard singer='Исполнитель' song_name='Название песни' clicks_number='27'/>
                <SongCard singer='Исполнитель' song_name='Название песни' clicks_number='27'/>
                <SongCard singer='Исполнитель' song_name='Название песни' clicks_number='27'/>
                <SongCard singer='Исполнитель' song_name='Название песни' clicks_number='27'/>
                <SongCard singer='Исполнитель' song_name='Название песни' clicks_number='27'/>
                <SongCard singer='Исполнитель' song_name='Название песни' clicks_number='27'/>
                <SongCard singer='Исполнитель' song_name='Название песни' clicks_number='27'/>
                <SongCard singer='Исполнитель' song_name='Название песни' clicks_number='27'/>
                <SongCard singer='Исполнитель' song_name='Название песни' clicks_number='27'/>
                <SongCard singer='Исполнитель' song_name='Название песни' clicks_number='27'/>
                <SongCard singer='Исполнитель' song_name='Название песни' clicks_number='27'/>
                <SongCard singer='Исполнитель' song_name='Название песни' clicks_number='27'/>
                <SongCard singer='Исполнитель' song_name='Название песни' clicks_number='27'/>
                <SongCard singer='Исполнитель' song_name='Название песни' clicks_number='27'/>
                <SongCard singer='Исполнитель' song_name='Название песни' clicks_number='27'/>
                <SongCard singer='Исполнитель' song_name='Название песни' clicks_number='27'/>
                <SongCard singer='Исполнитель' song_name='Название песни' clicks_number='27'/>
                <SongCard singer='Исполнитель' song_name='Название песни' clicks_number='27'/>
                <SongCard singer='Исполнитель' song_name='Название песни' clicks_number='27'/>
                <SongCard singer='Исполнитель' song_name='Название песни' clicks_number='27'/>
                <SongCard singer='Исполнитель' song_name='Название песни' clicks_number='27'/>
                <SongCard singer='Исполнитель' song_name='Название песни' clicks_number='27'/>
                <SongCard singer='Исполнитель' song_name='Название песни' clicks_number='27'/>
                <SongCard singer='Исполнитель' song_name='Название песни' clicks_number='27'/>
                <SongCard singer='Исполнитель' song_name='Название песни' clicks_number='27'/>
                <SongCard singer='Исполнитель' song_name='Название песни' clicks_number='27'/>
                <SongCard singer='Исполнитель' song_name='Название песни' clicks_number='27'/>
                <SongCard singer='Исполнитель' song_name='Название песни' clicks_number='27'/>
                <SongCard singer='Исполнитель' song_name='Название песни' clicks_number='27'/>
                <SongCard singer='Исполнитель' song_name='Название песни' clicks_number='27'/>
                <SongCard singer='Исполнитель' song_name='Название песни' clicks_number='27'/>
                <SongCard singer='Исполнитель' song_name='Название песни' clicks_number='27'/>
                <SongCard singer='Исполнитель' song_name='Название песни' clicks_number='27'/>
                <SongCard singer='Исполнитель' song_name='Название песни' clicks_number='27'/>
                <SongCard singer='Исполнитель' song_name='Название песни' clicks_number='27'/>
                <SongCard singer='Исполнитель' song_name='Название песни' clicks_number='27'/>
                <SongCard singer='Исполнитель' song_name='Название песни' clicks_number='27'/>
                <SongCard singer='Исполнитель' song_name='Название песни' clicks_number='27'/>
                <SongCard singer='Исполнитель' song_name='Название песни' clicks_number='27'/>
                <SongCard singer='Исполнитель' song_name='Название песни' clicks_number='27'/>
                <SongCard singer='Исполнитель' song_name='Название песни' clicks_number='27'/>
                <SongCard singer='Исполнитель' song_name='Название песни' clicks_number='27'/>
                <SongCard singer='Исполнитель' song_name='Название песни' clicks_number='27'/>
                <SongCard singer='Исполнитель' song_name='Название песни' clicks_number='27'/>
                <SongCard singer='Исполнитель' song_name='Название песни' clicks_number='27'/>
            </div>
        </>
    );
}

function SongCard(props) {
    return (
        <Link to="/song_page">
            <div className="song-card-box">
                <div className="song-card">
                    <div className="song-name valign-text-middle raleway-normal-ship-gray-15px">
                        {props.singer} - {props.song_name}
                    </div>
                    <div className="clicks-number valign-text-middle raleway-normal-ship-gray-15px">
                        {props.clicks_number}
                    </div>
                </div>
            </div>
        </Link>
    );
}
