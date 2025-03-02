import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { useState } from "react";

const useMovieTrailer = (id) => {

    const [trailerId, settrailerId] = useState(null);

    useEffect(() => {
        const getMovieVideos = async () => {

            const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, API_OPTIONS);
            const videos = await data.json();
    
            const filteredData = videos.results.filter( (video) => video.type === "Trailer");
            const trailer = filteredData.length > 0 ? filteredData[0] : videos.results[0];
            settrailerId(trailer.key);
        }

        getMovieVideos();
    }, [id]);

    return trailerId;
}


export default useMovieTrailer;