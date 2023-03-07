import React from "react";

import Card from "../../UI/Card";
import useCounter from "../../customhooks/useCounter";

function BackwardCounter(props) {
    const counter = useCounter();
    return <Card>{counter}</Card>;
}

export default BackwardCounter;
