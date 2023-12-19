import React, { useRef, useState } from "react";

import Audio from "../Audio/Audio";
import Controls from "../Controls/Controls";

function AudioPlayer({ songs }) {
    const [songIndex, setSongIndex] = useState(0);
    const song = songs[songIndex];

    const audioElementRef = useRef();

    return (
        <>
            <div className="audio-player-component">
                <Controls
                    audioElementRef={audioElementRef}
                    songIndex={songIndex}
                    setSongIndex={setSongIndex}
                />
                <Audio ref={audioElementRef} song={song} />
            </div>
        </>
    );
}

export default AudioPlayer;
