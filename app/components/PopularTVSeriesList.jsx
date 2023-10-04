"use client"
import React from "react";

import { useEffect, useState } from "react";
import { MapData } from "./MapData";

const PopularTVSeriesList = (props) => {
    const options = props.options
    const [dataSerie, setDataSerie] = useState();
    const [isLoading, setIsLoading] = useState(true)
    const linkAPI = "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1"

    useEffect(() => {
        fetch(linkAPI, options)
            .then(response => response.json())
            .then(setIsLoading(false))
            .then(response => setDataSerie(response.results))
            .catch(err => console.error(err));
    }, [dataSerie])

    if (isLoading) {
        return (
            <div id="upcoming" className="sectionContainer">
                <h2>Popular TV Series</h2>
                <div className="loader"></div>
            </div>
        )
    }
    return (
        <div id="populartvseries" className="sectionContainer">
            <h2>Popular TV Series</h2>
            <MapData type={"tv"} data={dataSerie} />
        </div>
    )
}
export default PopularTVSeriesList;