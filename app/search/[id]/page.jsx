import { SimilarMovies } from "../../components/Similar";
import "../../types.css"

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYzFiOTAzYTliM2M5MTBkMWMxOTJhOWJiMTA5NjJmNyIsInN1YiI6IjY1MTcwZDU1OTNiZDY5MDBhY2M2NjA4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h_w7gMe0Mir208HVzTNhBJnYYHVEdjsSUnr-3pPFwGw'
    }
};
const fetchItem = (id) => {
    return fetch(`https://api.themoviedb.org/3/search/multi?query=${id}&include_adult=false&language=en-US&page=1`, options)
        .then(response => response.json())
}
export default async function SearchItems({ params }) {
    const { id } = params
    const data = await fetchItem(id)
    return (
        <section style={{marginTop:"100px"}}>
            <h2>Search of {id.replace("%20", " ")}</h2>
            <SimilarMovies similar={data} />
        </section>
    )
}