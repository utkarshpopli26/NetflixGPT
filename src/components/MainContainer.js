import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";

const MainContainer = () => {

    const movies = useSelector((store) => store.movies?.nowPlayingMovies);

    if(!movies) return;

    console.log(movies);

    const {original_title, overview, id} = movies[0];

    return (
        <div>
            <VideoTitle original_title={original_title} overview={overview}/>
            <VideoBackground id={id}/>
        </div>
    );
}

export default MainContainer;