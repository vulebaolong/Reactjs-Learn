import React from "react";
import style from "./Form.module.css";
import useInput from "../hooks/useInput.js";

function validFname(inputValue) {
    return inputValue.trim() !== "";
}
function validLname(inputValue) {
    return inputValue.trim() !== "";
}

function validEmail(emailValue) {
    const validRegex = /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailValue.match(validRegex) ? true : false;
}
function Form(props) {
    const {
        inputValue: fNameValue,
        inputErorr: fNameErorr,
        inputValid: fNameValid,
        inputChangeHandler: fNameChangeHandler,
        inputBlurHandler: fNameBlurHandler,
        reset: fNameReset,
    } = useInput(validFname);

    const {
        inputValue: lNameValue,
        inputErorr: lNameErorr,
        inputValid: lNameValid,
        inputChangeHandler: lNameChangeHandler,
        inputBlurHandler: lNameBlurHandler,
        reset: lNameReset,
    } = useInput(validLname);

    const {
        inputValue: emailValue,
        inputErorr: emailErorr,
        inputValid: emailValid,
        inputChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: emailReset,
    } = useInput(validEmail);

    const formValid = fNameValid && emailValid & lNameValid;
    function submitHandler(e) {
        e.preventDefault();

        if (!formValid) {
            return;
        }
        fNameReset();
        lNameReset();
        emailReset();
        const valueForm = {
            fNameValue,
            lNameValue,
            emailValue,
        };

        console.log(valueForm);
    }
    const button = formValid ? <button>Submit</button> : <button disabled>Submit</button>;
    return (
        <form className={style["app"]} onSubmit={submitHandler}>
            <div className={style["control-group"]}>
                <div className={style["form-control"]}>
                    <label htmlFor="name">First Name</label>
                    <input
                        type="text"
                        id="name"
                        onChange={fNameChangeHandler}
                        onBlur={fNameBlurHandler}
                        value={fNameValue}
                    />
                    {fNameErorr && (
                        <p className={style["error-text"]}>
                            Please enter a valid First Name.
                        </p>
                    )}
                </div>
                <div className={style["form-control"]}>
                    <label htmlFor="name">Last Name</label>
                    <input
                        type="text"
                        id="name"
                        onChange={lNameChangeHandler}
                        onBlur={lNameBlurHandler}
                        value={lNameValue}
                    />
                    {lNameErorr && (
                        <p className={style["error-text"]}>
                            Please enter a valid Last Name.
                        </p>
                    )}
                </div>
            </div>
            <div className={style["form-control"]}>
                <label htmlFor="name">E-Mail Address</label>
                <input
                    type="text"
                    id="name"
                    onChange={emailChangeHandler}
                    onBlur={emailBlurHandler}
                    value={emailValue}
                />
                {emailErorr && (
                    <p className={style["error-text"]}>
                        Please enter a valid E-Mail Address.
                    </p>
                )}
            </div>
            <div className={style["form-actions"]}>{button}</div>
        </form>
    );
}

export default Form;
