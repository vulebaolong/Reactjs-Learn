import React from "react";
import MovieItem from "./MovieItem/MovieItem";

import style from "./MovieList.module.css";

function MovieList(props) {
    return (
        <>
            <ul className={style["movies-list"]}>
                {props.movies.map((movie) => (
                    <MovieItem
                        key={movie.id}
                        title={movie.title}
                        releaseDate={movie.releaseDate}
                        openingText={movie.openingText}
                    />
                ))}
            </ul>
        </>
    );
}

export default MovieList;
