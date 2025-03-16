import { BACKGROUND } from "../utils/constants";
import GptMoviesSuggestion from "./GptMoviesSuggestion";
import GptSearchBar from "./GptSearchBar";
import '../utils/styleSheets/browse.css';

const GptSearchPage = () => {
    return (
        <div className="gpt-search-page" style={{ backgroundImage: `url(${BACKGROUND})` }}>
            <div className="gpt-search-suggestion">
                <GptSearchBar/>
                <GptMoviesSuggestion />
            </div>
        </div>
    );
}

export default GptSearchPage;