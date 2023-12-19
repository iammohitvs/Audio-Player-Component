export function roundDownTime(time) {
    Math.floor(time);

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time - minutes * 60);

    const finalTime = `${Math.floor(minutes / 10) === 0 ? "0" : ""}${minutes}:${
        Math.floor(seconds / 10) === 0 ? "0" : ""
    }${seconds}`;

    return finalTime;
}
