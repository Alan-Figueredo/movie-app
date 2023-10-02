import "../../types.css"
import { SimilarMovies } from "../../components/Similar";
import { Credits } from "../../components/credits";
import { InfoItem } from "../../components/InfoItem";

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYzFiOTAzYTliM2M5MTBkMWMxOTJhOWJiMTA5NjJmNyIsInN1YiI6IjY1MTcwZDU1OTNiZDY5MDBhY2M2NjA4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h_w7gMe0Mir208HVzTNhBJnYYHVEdjsSUnr-3pPFwGw'
    }
};

const fetchItem = (id) => {
    return fetch(`https://api.themoviedb.org/3/tv/${id}?language=en-US`, options)
        .then(response => response.json())
}
const fetchSimilar = (id) => {
    return fetch(`https://api.themoviedb.org/3/tv/${id}/similar?language=en-US&page=1`, options)
        .then(response => response.json())
}
const fetchCredits = (id) => {
    return fetch(`https://api.themoviedb.org/3/tv/${id}/credits?language=en-US`, options)
        .then(response => response.json())
}


export default async function TvSeries({ params }) {
    const { id } = params
    const type = "tv"
    const item = await fetchItem(id)
    const similar = await fetchSimilar(id)
    const credits = await fetchCredits(id)

    return (
        <div style={{ marginTop: "100px" }}>
            <div style={{ display: "flex", flexWrap:"wrap" }}>
                <InfoItem item={item && item} />
                <div className="container-image">
                    <img className="imagenBanner" src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={`${item?.title} backdrop`} />
                </div>
            </div>
            <div>
                <h2>Similar</h2>
                <SimilarMovies type={type} similar={similar && similar} />
                <Credits credits={credits && credits} />
            </div>
        </div>
    )
}