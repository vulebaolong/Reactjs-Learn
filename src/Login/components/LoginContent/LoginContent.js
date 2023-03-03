import React, { useState, useEffect, useReducer, useContext, useRef } from "react";

import Card from "../UI/Card/Card";
import classes from "./LoginContent.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../../store/auth-context.js";
import Input from "../UI/Input/Input";

function emailReducer(state, action) {
    if (action.type === "INPUT_ONCHANGE") {
        return {
            value: action.value,
            isValid: state.value.includes("@"),
        };
    }
    if (action.type === "INPUT_BLUR") {
        return {
            value: state.value,
            isValid: state.value.includes("@"),
        };
    }
    return {
        value: action.value,
        isValid: false,
    };
}

function passwordReducer(state, action) {
    if (action.type === "INPUT_ONCHANGE") {
        return {
            value: action.value,
            isValid: action.value.trim().length > 5,
        };
    }
    if (action.type === "INPUT_ONBLUR") {
        return {
            value: state.value,
            isValid: state.value.trim().length > 5,
        };
    }
    return {
        value: "",
        isValid: false,
    };
}

const LoginContent = (props) => {
    const [formIsValid, setFormIsValid] = useState(false);

    const [emailState, dispatchEmail] = useReducer(emailReducer, {
        value: "",
        isValid: null,
    });
    const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
        value: "",
        isValid: null,
    });

    const isValidEmail = emailState.isValid;
    const isValidPassword = passwordState.isValid;

    useEffect(() => {
        const timming = setTimeout(function name(params) {
            console.log("kiểm tra");
            setFormIsValid(isValidEmail && isValidPassword);
        }, 500);

        return function clear(params) {
            console.log("clear");
            clearTimeout(timming);
        };
    }, [isValidEmail, isValidPassword]);

    const onChangeEmailHandler = (event) => {
        dispatchEmail({ type: "INPUT_ONCHANGE", value: event.target.value });
    };
    const onBlurEmailHandler = () => {
        dispatchEmail({ type: "INPUT_BLUR" });
    };

    const onChangePasswordHandler = (event) => {
        dispatchPassword({ type: "INPUT_ONCHANGE", value: event.target.value });
    };

    const onBlurPasswordHandler = () => {
        dispatchPassword({ type: "INPUT_ONBLUR" });
    };

    const ctx = useContext(AuthContext);
    const inputEmailEl = useRef();
    const inputPasswordEl = useRef();

    const submitHandler = (event) => {
        event.preventDefault();
        if (formIsValid) {
            ctx.onLogin(emailState.value, passwordState.value);
        }
        if (!formIsValid) {
            if (!isValidEmail) {
                console.log("focus email");
                inputEmailEl.current.focus();
                return;
            }
            if (!isValidPassword) {
                console.log("focus Password");
                inputPasswordEl.current.focus();
            }
        }
    };

    return (
        <Card className={classes.login}>
            <form onSubmit={submitHandler}>
                <Input
                    ref={inputEmailEl}
                    isValid={isValidEmail}
                    id="email"
                    type="text"
                    label="E-Mail"
                    value={emailState.value}
                    onChange={onChangeEmailHandler}
                    onBlur={onBlurEmailHandler}
                />
                <Input
                    ref={inputPasswordEl}
                    isValid={isValidPassword}
                    type="password"
                    id="password"
                    label="Password"
                    value={passwordState.value}
                    onChange={onChangePasswordHandler}
                    onBlur={onBlurPasswordHandler}
                />
                <div className={classes.actions}>
                    <Button type="submit" className={classes.btn}>
                        Login
                    </Button>
                </div>
            </form>
        </Card>
    );
};

export default LoginContent;
