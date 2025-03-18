import { useState } from "react";
import { BACKGROUND } from "../utils/constants";
import GptMoviesSuggestion from "./GptMoviesSuggestion";
import GptSearchBar from "./GptSearchBar";
import Shimmer from "./Shimmer";
import '../utils/styleSheets/browse.css';

const GptSearchPage = () => {
    const [loading, setLoading] = useState(false);

    return (
        <div className="gpt-search-page" style={{ backgroundImage: `url(${BACKGROUND})` }}>
            <div className="gpt-search-suggestion">
                <GptSearchBar setLoading={setLoading} />
                {loading ? <Shimmer /> : <GptMoviesSuggestion />}
            </div>
        </div>
    );
}

export default GptSearchPage;