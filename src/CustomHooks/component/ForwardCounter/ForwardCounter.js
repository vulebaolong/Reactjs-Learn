import React, { useEffect, useState } from "react";
import Card from "../../UI/Card";

function ForwardCounter(props) {
    const [counter, setCounter] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
            setCounter((prev) => {
                return ++prev;
            });
        }, 1000);
        return () => {
            clearInterval(timer);
        };
    }, []);
    return <Card>{counter}</Card>;
}

export default ForwardCounter;
