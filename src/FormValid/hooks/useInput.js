import { useState } from "react";

function useInput(callback) {
    const [inputValue, setInputValue] = useState("");
    const [inputTouch, setInputTouch] = useState(false);

    const inputValid = callback(inputValue);
    const inputErorr = !inputValid && inputTouch;

    function inputChangeHandler(e) {
        setInputValue(e.target.value);
        setInputTouch(true);
    }
    function inputBlurHandler() {
        setInputTouch(true);
    }

    function reset(params) {
        setInputTouch(false);
        setInputValue("");
    }

    return {
        inputValue,
        inputErorr,
        inputValid,
        inputChangeHandler,
        inputBlurHandler,
        reset,
    };
}

export default useInput;
