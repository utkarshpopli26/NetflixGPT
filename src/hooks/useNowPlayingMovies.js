import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/slices/moviesSlice";

const useNowPlayingMovies = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        const getNowPlayingMovies = async () => {
            const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS);
            const movies = await data.json();
            dispatch(addNowPlayingMovies(movies.results));
        }
        
        getNowPlayingMovies();
    }, [dispatch]);

}

export default useNowPlayingMovies;