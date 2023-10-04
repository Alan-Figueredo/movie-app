import React from "react";
import OnTheatre from "./components/OnTheatre";
import PopularFilmList from "./components/PopularList";
import PopularTVSeriesList from "./components/PopularTVSeriesList";
import UpComing from "./components/UpComing";
import "./page.css"
const HomePage = () => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYzFiOTAzYTliM2M5MTBkMWMxOTJhOWJiMTA5NjJmNyIsInN1YiI6IjY1MTcwZDU1OTNiZDY5MDBhY2M2NjA4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h_w7gMe0Mir208HVzTNhBJnYYHVEdjsSUnr-3pPFwGw'
        }
    };
    return (
        <div style={{ marginTop: "100px" }}>
            <OnTheatre options={options} />
            <UpComing options={options} />
            <PopularTVSeriesList options={options} />
            <PopularFilmList options={options} />
        </div>
    )
}
export default HomePage;