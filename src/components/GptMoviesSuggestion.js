import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import '../utils/styleSheets/movieList.css';
const GptMoviesSuggestion = () => {

    const list_of_movies = useSelector((store) => store.gpt?.gptMoviesList);
    const movies_names = useSelector((store) => store.gpt?.gptMoviesNames);

    return (
        <div className="gpt-movie-suggestion-container">
            <div>
                {list_of_movies && list_of_movies.map((array, index) => (
                    <MovieList key={index} title={movies_names[index]} movies={array} />
                ))}
            </div>
        </div>
    );
}

export default GptMoviesSuggestion;