import React, { useState, useEffect } from "react";

import { roundDownTime } from "../../utils";

function Slider({ audioElementRef }) {
    const [time, setTime] = useState(0);

    useEffect(() => {
        function changeTime(event) {
            if (event.code === "ArrowRight") {
                setTime((time) => {
                    time = time + 5;
                });
            } else {
                if (event.code === "ArrowLeft") {
                    setTime((time) => {
                        time = time - 5;
                    });
                }
            }
        }

        window.addEventListener("keydown", changeTime);

        return () => {
          window.removeEventListener("keydown", changeTime)
        }
    }, []);

    useEffect(() => {
        const updateTimeTimeout = setInterval(() => {
            setTime(audioElementRef.current.currentTime);
        }, 100);

        return () => {
            clearInterval(updateTimeTimeout);
        };
    }, []);

    return (
        <div className="slider">
            <input
                type="range"
                min={0}
                max={roundDownTime(audioElementRef.current.duration)}
                value={time}
                onChange={(event) => {
                    setTime(event.target.value);
                    audioElementRef.current.currentTime = event.target.value;
                }}
            />
            <p>{roundDownTime(time)}</p>
            <p>{roundDownTime(audioElementRef.current.duration)}</p>
        </div>
    );
}

export default Slider;
