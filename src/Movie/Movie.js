import React, { useEffect, useState } from "react";
import MovieList from "./MovieList/MovieList";
import "./Movie.module.css";
import AddMovie from "./AddMovie/AddMovie";
import useHttp from "./hooks/useHttp.js";

function Movie(props) {
    const [movies, setMovies] = useState(null);
    const { isLoading, isError, sendRequest } = useHttp();

    const transformMoviesGet = (data) => {
        let moviesData = [];
        for (const key in data) {
            moviesData.unshift({
                ...data[key],
                id: key,
            });
        }
        console.log("👙  moviesData: ", moviesData);

        setMovies(moviesData);
    };

    useEffect(() => {
        sendRequest(
            {
                url: "https://react-http-7b01f-default-rtdb.firebaseio.com/movies.json",
            },
            transformMoviesGet
        );
    }, [sendRequest]);

    function updateData(data, dataID) {
        // console.log("👙  data: ", data);
        // console.log("👙  dataID: ", dataID);
        const { name: id } = dataID;
        data.id = id;
        setMovies((prev) => {
            return [data, ...prev];
        });
    }

    function getData(params) {
        sendRequest(
            {
                url: "https://react-http-7b01f-default-rtdb.firebaseio.com/movies.json",
            },
            transformMoviesGet
        );
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
                <AddMovie updateData={updateData} />
            </section>
            <section>
                <button onClick={getData}>Fetch Movies</button>
            </section>
            <section>{content}</section>
        </>
    );
}
export default Movie;
