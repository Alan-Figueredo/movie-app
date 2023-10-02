"use client"
import { useState } from "react";
import Link from "next/link";

export function SimilarMovies(props) {
    const [hide, setHide] = useState(false)
    const [more, setMore] = useState(16);
    const seeMore = (length) => {
        setMore(length)
        setHide(true)
    }
    const { similar } = props
    const { type } = props
    return (
        <section>
            <div className="similarContainer">
                {similar.results.slice(0, !type ? similar.results.length : more).map((sim) => {
                    return (
                        <Link className="similarItem" href={`/${type ? type : sim.media_type}/${sim.id}`}>
                            <img className="similarPoster" src={sim.poster_path ? `https://image.tmdb.org/t/p/w500/${sim.poster_path}` : "https://th.bing.com/th/id/OIP.cYuUpmLFjc-wYNONzHsl-gAAAA?pid=ImgDet&rs=1"} alt={`${(sim.title ? sim.title : sim.name)} poster`} />
                            <p>{(sim.title ? sim.title : sim.name).slice(0, 18)}</p>
                        </Link>
                    )
                })}
            </div>
            {similar.results.length > 16 && type && <button className="seeMore" hidden={hide} onClick={() => { seeMore(similar.results.length) }}>See more</button>}
        </section>
    )
}