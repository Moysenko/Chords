import React from 'react';
import {Link} from "react-router-dom";
import "./MainPage.css"

export function MainPage() {

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
