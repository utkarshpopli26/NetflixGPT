import { useDispatch } from "react-redux";
import { useEffect,useMemo } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies,popularMovies,topRatedMovies,upcomingMovies} from "../utils/slices/moviesSlice";


const useMovies = () => {

    const dispatch = useDispatch();

    const titles = useMemo(() => ['now_playing', 'popular', 'top_rated', 'upcoming'], []);

    useEffect(() => {
            titles.map(async (title) => {
                const data = await fetch('https://api.themoviedb.org/3/movie/' + title + '?language=en-US&page=1', API_OPTIONS);
                const movies = await data.json();
                if(title === 'now_playing')dispatch(addNowPlayingMovies(movies.results));
                else if(title === 'popular')dispatch(popularMovies(movies.results));
                else if(title === 'top_rated')dispatch(topRatedMovies(movies.results));
                else dispatch(upcomingMovies(movies.results));
            });
    }, [dispatch,titles]);

}

export default useMovies; 