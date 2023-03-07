import { useEffect, useState } from "react";

function useCounter(props) {
    const [counter, setCounter] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
            setCounter((prev) => {
                return prev + 1;
            });
        }, 1000);
        return () => {
            clearInterval(timer);
        };
    }, []);
    return counter;
}

export default useCounter;
