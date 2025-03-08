import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({posterPath}) => {
    return (
        <div>
            <img src={IMG_CDN_URL + posterPath} alt="Movie Poster"></img>
        </div>
    );
}

export default MovieCard;