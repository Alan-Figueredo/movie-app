"use client"
import React from "react";

import { useState } from "react";
import Link from "next/link";

export const MapData = (props) => {
    const data = props.data
    const type = props.type
    const [more, setMore] = useState(10);
    const [hidden, setHidden] = useState(false)
    const rating = (rate) => {
        return rate >= 7 ? "green" : ((rate <= 7 && rate >= 3) ? "yellow" : "red")
    }
    const seeMore = (length) => {
        setMore(length)
    }
    return (
        <>
            <div data-testid="movie-container" className="movieContainer">
                {data && data.slice(0, more).map((item) => {
                    return (
                        <Link data-testid="movie-item" className="movieItem" href={`/${type}/${item.id}`} key={item.id}>
                            <img className="imgItem" src={item.backdrop_path ? `https://image.tmdb.org/t/p/w500/${item.backdrop_path}` : ""} alt={`backdrop of ${(item.title ? item.title : item.name)}`} />
                            <div className="movieInformation">
                                <div className={`movieRate ${rating(item.vote_average)}`}>
                                    <p >{item.vote_average}</p>
                                </div>
                                <h3 className="movieName">{`${(item.title ? item.title : item.name).slice(0, 18)}${(item.title ? item.title : item.name).length >= 18 ? "..." : ""}`}</h3>
                            </div>
                        </Link>
                    )
                })}
            </div>
            <button className="seeMore" hidden={hidden} onClick={() => { seeMore(data.length); setHidden(!hidden) }}>See more</button>
        </>
    )
}