"use client"
import Link from "next/link";
import { useEffect, useState } from "react";

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
    }, [dataMovie])
    
    if (isLoading) {
        return (
            <div className="loader"></div>
        )
    }
    return (
        <div>
            <h2>Now on cinemas</h2>
            <div className="onTheatreContainer">
                {dataMovie && dataMovie.map((movie) => {
                    return (
                        <Link href={`/movie/${movie.id}`} key={movie.id}>
                            <img className="onTheatreImg" src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt={`backdrop of ${movie.original_title}`} />
                            <div className="onTheatreTitle">
                                {movie.original_title}
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}
export default OnTheatre;