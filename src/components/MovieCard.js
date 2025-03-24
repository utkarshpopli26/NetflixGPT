import { IMG_CDN_URL } from "../utils/constants";
import '../utils/styleSheets/movieList.css';

const MovieCard = ({posterPath}) => {
    if(!posterPath)return ;
    return (
        <div>
            <img src={IMG_CDN_URL + posterPath} alt="Movie Poster"></img>
        </div>
    );
}

export default MovieCard;