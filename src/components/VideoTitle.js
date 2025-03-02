
import '../utils/styleSheets/videoTitle.css'

const VideoTitle = ({original_title,overview}) => {
    return (
        <div className="title-container">
            <h1>{original_title}</h1>
            <p>{overview}</p>
            <div>
                <button className='title-buttons play'>Play</button>
                <button className='title-buttons'>More Info</button>
            </div>
        </div>
    );
}

export default VideoTitle;