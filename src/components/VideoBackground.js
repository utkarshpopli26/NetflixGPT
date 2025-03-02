
import useMovieTrailer from "../hooks/useMovieTrailer";
import '../utils/styleSheets/videoBackground.css'

const VideoBackground = ({ id }) => {
    const trailerId = useMovieTrailer(id);

    return (
        <div className="video-background-container">
            <iframe 
                src={`https://www.youtube.com/embed/${trailerId}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&iv_load_policy=3&loop=1&playlist=${trailerId}`} 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin">
            </iframe>
        </div>
    );
}

export default VideoBackground;