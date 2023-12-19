import React from "react";

import Slider from "../Slider/Slider";

function Audio({ song }, ref) {
    return (
        <>
            <audio
                ref={ref}
                src={song.song_src}
                controls
                autoPlay
            />
            <Slider />
        </>
    );
}

export default React.forwardRef(Audio);
