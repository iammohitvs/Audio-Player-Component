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

import { songsArrayLength } from "../../songs_data";

function Controls({ audioElementRef, songIndex, setSongIndex }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLoop, setIsLoop] = useState(false);

    const pausePlayFunction = () => {
        console.log(isPlaying)
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

    useEffect(() => {
        function checkKeyDown(event) {
            if (event.code === "Space") {
                pausePlayFunction()
            }
        }

        window.addEventListener("keydown", checkKeyDown)

        return () => {
            window.removeEventListener("keydown", checkKeyDown)
        }
    }, [])

    useEffect(() => {
        const goNextsong = () => {
            songsArrayLength - 1 === songIndex
                ? setSongIndex(0)
                : setSongIndex(songIndex + 1);
            setIsPlaying(true);
        };

        audioElementRef.current.addEventListener("ended", goNextsong);

        return () => {
            audioElementRef.current.removeEventListener("ended", goNextsong);
        };
    }, []);

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
                        ? setSongIndex(songsArrayLength - 1)
                        : setSongIndex(songIndex - 1);
                    setIsPlaying(true);
                }}
            />
            <ChevronsRight
                onClick={() => {
                    songsArrayLength - 1 === songIndex
                        ? setSongIndex(0)
                        : setSongIndex(songIndex + 1);
                    setIsPlaying(true);
                }}
            />
            <Repeat onClick={toggleLoop} color={isLoop ? "red" : "black"} />
            {/* <Volume /> */}
        </div>
    );
}

export default Controls;
