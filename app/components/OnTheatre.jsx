"use client"
import { useEffect, useState } from "react";
import Slider from "./Slider";

const OnTheatre = (props) => {
    const options = props.options
    const [dataMovie, setDataMovie] = useState();
    const [isLoading, setIsLoading] = useState(true)
    const linkAPI = "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1"

    useEffect(() => {
        fetch(linkAPI, options)
            .then(response => response.json())
            .then(setIsLoading(false))
            .then(response => setDataMovie(response.results))
            .catch(err => console.error(err));
    }, [])

    if (isLoading) {
        return (
            <div className="loader"></div>
        )
    }
    return (
        <div>
            <h2>Now on cinemas</h2>
            <Slider data={dataMovie} />
        </div>
    )
}
export default OnTheatre;