import React from "react";
export function InfoItem(props) {
    const { item } = props
    const rating = (rate) => {
        return rate >= 7 ? "green" : ((rate <= 7 && rate >= 3) ? "yellow" : "red")
    }
    return (
        <div className="infoItem">
            <h2 className="title">{item?.original_title ? item?.original_title : item.name}</h2>
            <div className="column">
                <p>{item.release_date ? item?.release_date?.slice(0, 4) : item.first_air_date.slice(0, 4)}</p>
                {item?.runtime ? <p>{item?.runtime} MIN</p> : <p>Seasons {item.seasons.length}</p>}
                <div data-testid="movieRate" className={`movieRate ${rating(item?.vote_average)}`}>
                    <p>{item?.vote_average.toString().slice(0, 1)}</p>
                </div>
            </div>
            <div className="column">
                {item.spoken_languages.map((lang) => {
                    return (
                        <p key={lang.iso_639_1}>{lang.name}</p>
                    )
                })}
            </div>
            <div className="column">
                {item.genres.map((genre) => {
                    return (
                        <p id={genre.id} className="genre">{genre.name}</p>
                    )
                })}
            </div>
            <p className="description" >{item.overview.slice(0, 500)}</p>
        </div>
    )
}