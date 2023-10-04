"use client"
import Link from "next/link";
import React from "react";

export function SimilarMovies(props) {

    const { similar } = props
    const { type } = props
    return (
        <section>
            <div className="similarContainer">
                {similar.results.map((sim) => {
                    return (
                        <Link className="similarItem" href={`/${type ? type : sim.media_type}/${sim.id}`}>
                            <img className="similarPoster" src={sim.poster_path ? `https://image.tmdb.org/t/p/w500/${sim.poster_path}` : "https://th.bing.com/th/id/OIP.cYuUpmLFjc-wYNONzHsl-gAAAA?pid=ImgDet&rs=1"} alt={`${(sim.title ? sim.title : sim.name)} poster`} />
                            <p>{(sim.title ? sim.title : sim.name).slice(0, 18)}</p>
                        </Link>
                    )
                })}
            </div>
        </section>
    )
}