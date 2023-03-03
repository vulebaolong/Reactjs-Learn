import React, { useEffect, useState } from "react";
import MovieList from "./MovieList/MovieList";
import "./Movie.module.css";
import AddMovie from "./AddMovie/AddMovie";

function Movie(props) {
    const [movies, setMovies] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const [isError, setIsError] = useState(null);

    useEffect(() => {
        getMovieHandler();
    }, []);

    async function getMovieHandler(params) {
        try {
            setLoading(true);
            setIsError(null);
            // const res = await fetch("https://swapi.dev/api/films/");
            const res = await fetch(
                "https://react-http-7b01f-default-rtdb.firebaseio.com/movies.json"
            );
            if (!res.ok) {
                throw new Error("Something went wrong!");
            }
            const data = await res.json();
            console.log(data);

            let moviesData = [];
            for (const key in data) {
                // console.log(key);
                // console.log(data[key]);
                moviesData.unshift({
                    ...data[key],
                    id: key,
                });
            }
            // console.log(moviesData);
            setMovies(moviesData);
            setLoading(false);
        } catch (error) {
            setIsError(error.message);
        }
    }

    async function addMovieHandler(movie) {
        const res = await fetch(
            "https://react-http-7b01f-default-rtdb.firebaseio.com/movies.json",
            {
                method: "POST",
                body: JSON.stringify(movie),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        const data = await res.json();
        console.log(data);

        const res1 = await fetch(
            `https://react-http-7b01f-default-rtdb.firebaseio.com/movies/${data.name}.json`
        );
        const data1 = await res1.json();
        data1.id = data.name;
        // console.log(data1);
        setMovies((prev) => {
            return [data1, ...prev];
        });
    }

    let content = "";

    if (movies?.length === 0 && movies) {
        content = <span>Found no</span>;
    }
    if (movies?.length > 0 && movies) {
        content = <MovieList movies={movies} />;
    }
    if (isLoading) {
        content = <span>Loading...</span>;
    }
    if (isError) {
        content = <span>{isError}</span>;
    }

    return (
        <>
            <section>
                <AddMovie onAddMovie={addMovieHandler} />
            </section>
            <section>
                <button onClick={getMovieHandler}>Fetch Movies</button>
            </section>
            <section>{content}</section>
        </>
    );
}
export default Movie;
