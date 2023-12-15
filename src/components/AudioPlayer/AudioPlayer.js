import React, { useRef, useState } from "react";

import Audio from "../Audio/Audio";

function AudioPlayer({ songs }) {
    const [currentSong, setCurrentSong] = useState(songs[0]);
    const [volume, setVolume] = useState(1.0);
    const [time, setTime] = useState(0);
    const [isPLaying, setIsPlaying] = useState(true);

    const audioElementRef = useRef();

    return (
        <div className="audio-player-component">
            <img src="./Bump-Heads.jpeg" alt="" />
            <Audio song={currentSong} ref={audioElementRef} />
            <input type="range" />
            <div className="times">
                <p>0:00</p>
                <p>3:50</p>
            </div>
            <div className="controls">
                {
                    // next-song
                    //pause button
                    // previous-song
                }
            </div>
            <input type="range" />
        </div>
    );
}

export default AudioPlayer;
