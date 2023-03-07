import React, { useRef } from "react";
import style from "./AddMovie.module.css";
import useHttp from "../hooks/useHttp.js";

function AddMovie(props) {
    const titleRef = useRef("");
    const openingTextRef = useRef("");
    const releaseDateRef = useRef("");
    const { isLoading, isError, sendRequest } = useHttp();

    async function addMovieHandler(movie) {
        sendRequest(
            {
                url: "https://react-http-7b01f-default-rtdb.firebaseio.com/movies.json",
                method: "POST",
                body: movie,
                headers: {
                    "Content-Type": "application/json",
                },
            },
            props.updateData.bind(null, movie)
        );
    }

    function submitHandler(event) {
        event.preventDefault();
        const movie = {
            title: titleRef.current.value,
            openingText: openingTextRef.current.value,
            releaseDate: releaseDateRef.current.value,
        };
        addMovieHandler(movie);
    }

    let content = <button>Add Movie</button>;
    if (isLoading) {
        content = <span>Loading...</span>;
    }
    if (isError) {
        content = <span>{isError}</span>;
    }
    return (
        <form onSubmit={submitHandler}>
            <div className={style.control}>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" ref={titleRef} />
            </div>
            <div className={style.control}>
                <label htmlFor="opening-text">Opening Text</label>
                <textarea rows="5" id="opening-text" ref={openingTextRef}></textarea>
            </div>
            <div className={style.control}>
                <label htmlFor="date">Release Date</label>
                <input type="text" id="date" ref={releaseDateRef} />
            </div>
            <div>{content}</div>
        </form>
    );
}

export default AddMovie;
