import "./styles.css";

import AudioPlayer from "./components/AudioPlayer/AudioPlayer";

import songs from "./songs_data";

function App() {
    return (
        <div className="wrapper">
            <AudioPlayer songs={songs} />
        </div>
    );
}

export default App;
