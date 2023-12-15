import React from "react";

function Audio({ song }, ref) {
    console.log(song)
    const { thumbnail, song_src: source, song_info: info } = song

    console.log(thumbnail, source, info)
    return (
        <>
            <img src={thumbnail.src} alt={thumbnail.alt} />
            <audio src={source} ref={ref} controls className="audio-element" />
            <div className="song-info">
                <p>
                    {info.name}
                    {info.artist}
                    Album: {info.album}
                </p>
            </div>
        </>
    );
}

export default React.forwardRef(Audio);
