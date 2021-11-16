import React, {useState} from 'react';
import "./SongPage.css"
import arrow_up from "../assets/arrow_up.svg"
import arrow_down from "../assets/arrow_down.svg"
import minus from "../assets/minus.svg"
import plus from "../assets/plus.svg"

export function SongPage() {
    const [fontSize, setFontSize] = useState(13);
    const [scrollSpeed, setScrollSpeed] = useState(0);
    return (
        <>
            <div className="view-params">
                <div className="autoscroll-box">
                    <div className="valign-text-middle">
                        Autoscroll speed: {scrollSpeed}
                    </div>
                    <div className="scroll-regulator">
                        <img src={arrow_up} onClick={() => setScrollSpeed(scrollSpeed - 1)}/>
                        <div className="vline"/>
                        <img src={arrow_down} onClick={() => setScrollSpeed(scrollSpeed + 1)}/>
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
            <div className="song-box">
                <div className="song-title-singer">
                    Исполнитель - Название песни
                </div>

                <div style={{fontSize: `${fontSize}px`}} className="song-chords">
                    Текст песни Текст песни Текст песни Текст песниТекст песни Текст песниТекст песни Текст песни
                    Текст песни Текст песни Текст песни Текст песниТекст песни Текст песниТекст песни Текст песни
                    Текст песни Текст песни Текст песни Текст песниТекст песни Текст песниТекст песни Текст песни
                    Текст песни Текст песни Текст песни Текст песниТекст песни Текст песниТекст песни Текст песни
                    Текст песни Текст песни Текст песни Текст песниТекст песни Текст песниТекст песни Текст песни
                    Текст песни Текст песни Текст песни Текст песниТекст песни Текст песниТекст песни Текст песни
                    Текст песни Текст песни Текст песни Текст песниТекст песни Текст песниТекст песни Текст песни
                    Текст песни Текст песни Текст песни Текст песниТекст песни Текст песниТекст песни Текст песни
                    Текст песни Текст песни Текст песни Текст песниТекст песни Текст песниТекст песни Текст песни
                    Текст песни Текст песни Текст песни Текст песниТекст песни Текст песниТекст песни Текст песни
                    Текст песни Текст песни Текст песни Текст песниТекст песни Текст песниТекст песни Текст песни
                    Текст песни Текст песни Текст песни Текст песниТекст песни Текст песниТекст песни Текст песни
                    Текст песни Текст песни Текст песни Текст песниТекст песни Текст песниТекст песни Текст песни
                    Текст песни Текст песни Текст песни Текст песниТекст песни Текст песниТекст песни Текст песни
                    Текст песни Текст песни Текст песни Текст песниТекст песни Текст песниТекст песни Текст песни
                    Текст песни Текст песни Текст песни Текст песниТекст песни Текст песниТекст песни Текст песни
                    Текст песни Текст песни Текст песни Текст песниТекст песни Текст песниТекст песни Текст песни
                    Текст песни Текст песни Текст песни Текст песниТекст песни Текст песниТекст песни Текст песни
                    Текст песни Текст песни Текст песни Текст песниТекст песни Текст песниТекст песни Текст песни
                    Текст песни Текст песни Текст песни Текст песниТекст песни Текст песниТекст песни Текст песни
                    Текст песни Текст песни Текст песни Текст песниТекст песни Текст песниТекст песни Текст песни
                    Текст песни Текст песни Текст песни Текст песниТекст песни Текст песниТекст песни Текст песни
                    Текст песни Текст песни Текст песни Текст песниТекст песни Текст песниТекст песни Текст песни
                    Текст песни Текст песни Текст песни Текст песниТекст песни Текст песниТекст песни Текст песни
                    Текст песни Текст песни Текст песни Текст песниТекст песни Текст песниТекст песни Текст песни
                    Текст песни Текст песни Текст песни Текст песниТекст песни Текст песниТекст песни Текст песни
                    Текст песни Текст песни Текст песни Текст песниТекст песни Текст песниТекст песни Текст песни
                    Текст песни Текст песни Текст песни Текст песниТекст песни Текст песниТекст песни Текст песни
                    Текст песни Текст песни Текст песни Текст песниТекст песни Текст песниТекст песни Текст песни
                    Текст песни Текст песни Текст песни Текст песниТекст песни Текст песниТекст песни Текст песни
                    Текст песни Текст песни Текст песни Текст песниТекст песни Текст песниТекст песни Текст песни
                    Текст песни Текст песни Текст песни Текст песниТекст песни Текст песниТекст песни Текст песни
                    Текст песни Текст песни Текст песни Текст песниТекст песни Текст песниТекст песни Текст песни
                    Текст песни Текст песни Текст песни Текст песниТекст песни Текст песниТекст песни Текст песни
                    Текст песни Текст песни Текст песни Текст песниТекст песни Текст песниТекст песни Текст песни
                    Текст песни Текст песни Текст песни Текст песниТекст песни Текст песниТекст песни Текст песни
                    Текст песни Текст песни Текст песни Текст песниТекст песни Текст песниТекст песни Текст песни
                    Текст песни Текст песни Текст песни Текст песниТекст песни Текст песниТекст песни Текст песни
                    Текст песни Текст песни Текст песни Текст песниТекст песни Текст песниТекст песни Текст песни
                    Текст песни Текст песни Текст песни Текст песниТекст песни Текст песниТекст песни Текст песни
                    Текст песни Текст песни Текст песни Текст песниТекст песни Текст песниТекст песни Текст песни
                    Текст песни Текст песни Текст песни Текст песниТекст песни Текст песниТекст песни Текст песни
                    Текст песни Текст песни Текст песни Текст песниТекст песни Текст песниТекст песни Текст песни
                    Текст песни Текст песни Текст песни Текст песниТекст песни Текст песниТекст песни Текст песни
                    Текст песни Текст песни Текст песни Текст песниТекст песни Текст песниТекст песни Текст песни
                    Текст песни Текст песни Текст песни Текст песниТекст песни Текст песниТекст песни Текст песни
                    Текст песни Текст песни Текст песни Текст песниТекст песни Текст песниТекст песни Текст песни
                    Текст песни Текст песни Текст песни Текст песниТекст песни Текст песниТекст песни Текст песни
                    Текст песни Текст песни Текст песни Текст песниТекст песни Текст песниТекст песни Текст песни
                    Текст песни Текст песни Текст песни Текст песниТекст песни Текст песниТекст песни Текст песни
                    Текст песни Текст песни Текст песни Текст песниТекст песни Текст песниТекст песни Текст песни
                    Текст песни Текст песни Текст песни Текст песниТекст песни Текст песниТекст песни Текст песни
                    Текст песни Текст песни Текст песни Текст песниТекст песни Текст песниТекст песни Текст песни
                    Текст песни Текст песни Текст песни Текст песниТекст песни Текст песниТекст песни Текст песни
                    Текст песни Текст песни Текст песни Текст песниТекст песни Текст песниТекст песни Текст песни
                    Текст песни Текст песни Текст песни Текст песниТекст песни Текст песниТекст песни Текст песни
                    Текст песни Текст песни Текст песни Текст песниТекст песни Текст песниТекст песни Текст песни
                    Текст песни Текст песни Текст песни Текст песниТекст песни Текст песниТекст песни Текст песни
                    Текст песни Текст песни Текст песни Текст песниТекст песни Текст песниТекст песни Текст песни
                    Текст песни Текст песни Текст песни Текст песниТекст песни Текст песниТекст песни Текст песни
                    Текст песни Текст песни Текст песни Текст песниТекст песни Текст песниТекст песни Текст песни
                    Текст песни Текст песни Текст песни Текст песниТекст песни Текст песниТекст песни Текст песни
                    Текст песни Текст песни Текст песни Текст песниТекст песни Текст песниТекст песни Текст песни
                    Текст песни Текст песни Текст песни Текст песниТекст песни Текст песниТекст песни Текст песни
                    Текст песни Текст песни Текст песни Текст песниТекст песни Текст песниТекст песни Текст песни
                    Текст песни Текст песни Текст песни Текст песниТекст песни Текст песниТекст песни Текст песни
                    Текст песни Текст песни Текст песни Текст песниТекст песни Текст песниТекст песни Текст песни
                    Текст песни Текст песни Текст песни Текст песниТекст песни Текст песниТекст песни Текст песни
                    Текст песни Текст песни Текст песни Текст песниТекст песни Текст песниТекст песни Текст песни
                    Текст песни Текст песни Текст песни Текст песниТекст песни Текст песниТекст песни Текст песни
                    Текст песни Текст песни Текст песни Текст песниТекст песни Текст песниТекст песни Текст песни
                    Текст песни Текст песни Текст песни Текст песниТекст песни Текст песниТекст песни Текст песни
                    Текст песни Текст песни Текст песни Текст песниТекст песни Текст песниТекст песни Текст песни
                    Текст песни Текст песни Текст песни Текст песниТекст песни Текст песниТекст песни Текст песни
                    Текст песни Текст песни Текст песни Текст песниТекст песни Текст песниТекст песни Текст песни
                    Текст песни Текст песни Текст песни Текст песниТекст песни Текст песниТекст песни Текст песни
                    Текст песни Текст песни Текст песни Текст песниТекст песни Текст песниТекст песни Текст песни
                    Текст песни Текст песни Текст песни Текст песниТекст песни Текст песниТекст песни Текст песни
                    Текст песни Текст песни Текст песни Текст песниТекст песни Текст песниТекст песни Текст песни
                    Текст песни Текст песни Текст песни Текст песниТекст песни Текст песниТекст песни Текст песни
                    Текст песни Текст песни Текст песни Текст песниТекст песни Текст песниТекст песни Текст песни
                    Текст песни Текст песни Текст песни Текст песниТекст песни Текст песниТекст песни Текст песни
                    Текст песни Текст песни Текст песни Текст песниТекст песни Текст песниТекст песни Текст песни
                    Текст песни Текст песни Текст песни Текст песниТекст песни Текст песниТекст песни Текст песни
                    Текст песни Текст песни Текст песни Текст песниТекст песни Текст песниТекст песни Текст песни
                    Текст песни Текст песни Текст песни Текст песниТекст песни Текст песниТекст песни Текст песни
                    Текст песни Текст песни Текст песни Текст песниТекст песни Текст песниТекст песни Текст песни
                    Текст песни Текст песни Текст песни Текст песниТекст песни Текст песниТекст песни Текст песни
                    Текст песни Текст песни Текст песни Текст песниТекст песни Текст песниТекст песни Текст песни
                    Текст песни Текст песни Текст песни Текст песниТекст песни Текст песниТекст песни Текст песни
                    Текст песни Текст песни Текст песни Текст песниТекст песни Текст песниТекст песни Текст песни
                    Текст песни Текст песни Текст песни Текст песниТекст песни Текст песниТекст песни Текст песни
                    Текст песни Текст песни Текст песни Текст песниТекст песни Текст песниТекст песни Текст песни
                </div>
            </div>
        </>
    );
}