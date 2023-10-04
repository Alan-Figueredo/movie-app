import React from "react";
const Movie = ({ params }) => {
    const { id } = params
    return (
        <h1>{id}</h1>
    )
}
export default Movie;