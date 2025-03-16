import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({posterPath}) => {
    if(!posterPath)return ;
    return (
        <div>
            <img src={IMG_CDN_URL + posterPath} alt="Movie Poster"></img>
        </div>
    );
}

export default MovieCard;