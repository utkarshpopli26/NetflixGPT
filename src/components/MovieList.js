import MovieCard from "./MovieCard";
import '../utils/styleSheets/movieList.css';

const MovieList = ({ title, movies }) => {

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