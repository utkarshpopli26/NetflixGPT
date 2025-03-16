import { API_OPTIONS } from "../utils/constants";
import openai from "../utils/OpenAI";
import { useRef } from "react";
import { addGptMovies } from "../utils/slices/gptSlice";
import { useDispatch } from "react-redux";

const GptSearchBar = () => {

    const searchText = useRef("");
    const dispatch = useDispatch();

    const searchMovies = async (movie) => {
        const movie_data = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movie + '&include_adult=false&language=en-US&page=1', API_OPTIONS);
        const final_movie_data = await movie_data.json();
        return final_movie_data.results;
    }

    const submitSearch = async () => {
        const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query : " + searchText.current.value + ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
        const gptResults = await openai.chat.completions.create({
            messages: [{ role: "user", content: gptQuery }],
            model: "gpt-4o",
        });
        const movie_names = gptResults.choices[0].message.content.split(",");
        
        const list_of_movies = await Promise.all(movie_names.map((movie) => searchMovies(movie)));

        dispatch(addGptMovies({movie_names: movie_names, final_list_of_movies: list_of_movies}));
    }   

    return (
        <div className="search-bar">
            <input ref={searchText} type="text" placeholder="What would you like to watch?"></input>
            <button className="gpt-btn" onClick={submitSearch}>Search</button>
        </div>
    );
}

export default GptSearchBar;