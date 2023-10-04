"use client"
import React from "react";
import { useEffect, useState } from "react";
import { MapData } from "./MapData";

const UpComing = (props) => {
    const options = props.options
    const [dataMovie, setDataMovie] = useState();
    const [isLoading, setIsLoading] = useState(true)
    const linkAPI = "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1"

    useEffect(() => {
        fetch(linkAPI, options)
            .then(response => response.json())
            .then(setIsLoading(false))
            .then(response => setDataMovie(response.results))
            .catch(err => console.error(err));
    }, [dataMovie])

    if (isLoading) {
        return (
            <div id="upcoming" className="sectionContainer">
                <h2>UpComing</h2>
                <div className="loader"></div>
            </div>
        )
    }
    return (
        <div id="upcoming" className="sectionContainer">
            <h2>UpComing</h2>
            <MapData type={"movie"} data={dataMovie} />
        </div>
    )
}
export default UpComing;