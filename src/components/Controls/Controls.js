import React, { useEffect, useState } from "react";

import {
    Play,
    Pause,
    ChevronsRight,
    ChevronsLeft,
    Repeat,
    Volume,
    VolumeX,
} from "react-feather";

import { songsLength } from "../../songs_data";

function Controls({ audioElementRef, songIndex, setSongIndex }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLoop, setIsLoop] = useState(false);

    const pausePlayFunction = () => {
        if (isPlaying) {
            audioElementRef.current.pause();
        } else {
            audioElementRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const toggleLoop = () => {
        audioElementRef.current.setAttribute("loop", !isLoop);
        setIsLoop(!isLoop);
    };

    return (
        <div className="controls">
            {isPlaying ? (
                <Pause onClick={pausePlayFunction} />
            ) : (
                <Play onClick={pausePlayFunction} />
            )}
            <ChevronsLeft
                onClick={() => {
                    songIndex === 0
                        ? setSongIndex(songsLength - 1)
                        : setSongIndex(songIndex - 1);
                    setIsPlaying(true);
                }}
            />
            <ChevronsRight
                onClick={() => {
                    songsLength - 1 === songIndex
                        ? setSongIndex(0)
                        : setSongIndex(songIndex + 1);
                    setIsPlaying(true);
                }}
            />
            <Repeat onClick={toggleLoop} color={isLoop ? "red" : "black"} />
        </div>
    );
}

export default Controls;
