import MovieList from "./MovieList";
import '../utils/styleSheets/secondaryContainer.css';

const SecondaryContainer = () => {
    return (
        <div>
            <div className="secondary-container-child">
                <MovieList title={"Now Playing"}/>
                <MovieList title={"Top Rated"}/>
                <MovieList title={"Popular"}/>
                <MovieList title={"Upcoming"}/>
            </div>   
        </div>
    );
}

export default SecondaryContainer;