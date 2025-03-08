import MovieCard from "./MovieCard";
import { useSelector } from "react-redux";
import '../utils/styleSheets/movieList.css';

const MovieList = ({ title }) => {

    const movies = useSelector((store) => {
        switch (title) {
            case 'Now Playing':
                return store.movies?.nowPlayingMovies;
            case 'Top Rated':
                return store.movies?.topRatedMovies;
            case 'Popular':
                return store.movies?.popularMovies;
            case 'Upcoming':
                return store.movies?.upcomingMovies;
            default:
                return [];
        }
    });

    return (
        <div>
            <h2>{title}</h2>
            <div className="movie-list">
                    {movies && movies.map((movie) => (
                        <MovieCard key={movie.id} posterPath={movie.poster_path} />
                    ))}
            </div>
        </div>
    );
}

export default MovieList;