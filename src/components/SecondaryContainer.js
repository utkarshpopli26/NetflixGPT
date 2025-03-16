import MovieList from "./MovieList";
import '../utils/styleSheets/secondaryContainer.css';
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
    const nowPlayingMovies = useSelector((store) => store.movies?.nowPlayingMovies);
    const topRatedMovies = useSelector((store) => store.movies?.topRatedMovies);
    const popularMovies = useSelector((store) => store.movies?.popularMovies);
    const upcomingMovies = useSelector((store) => store.movies?.upcomingMovies);

    const movieCategories = [
        { title: "Now Playing", movies: nowPlayingMovies },
        { title: "Top Rated", movies: topRatedMovies },
        { title: "Popular", movies: popularMovies },
        { title: "Upcoming", movies: upcomingMovies }
    ];

    return (
        <div>
            <div className="secondary-container-child">
                {movieCategories.map((category) => (
                    <MovieList key={category.title} title={category.title} movies={category.movies} />
                ))}
            </div>
        </div>
    );
}

export default SecondaryContainer;