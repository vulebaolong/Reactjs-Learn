import React, { useState, useRef } from "react";

import style from "./AddUser.module.css";
import Card from "../UI/Card/Card.js";
import Button from "../UI/Button/Button.js";
import ErrorModal from "../ErrorModal/ErrorModal.js";

function AddUser(props) {
    const inputNameEl = useRef();
    const inputAgeEl = useRef();

    const [valueError, setValueError] = useState();

    function handlerButton() {
        const valueInputName = inputNameEl.current.value;
        const valueInputAge = inputAgeEl.current.value;
        if (valueInputName.trim().length === 0 || valueInputAge.trim().length === 0) {
            setValueError({
                title: "Lỗi nhập liệu",
                message: "Thông tin tên và tuổi trống",
            });
            return;
        }
        if (+valueInputAge.trim() < 1) {
            setValueError({
                title: "Lỗi nhập liệu",
                message: "Thông tin tuổi không hợp lệ",
            });
            return;
        }
        props.onAddUser({
            username: valueInputName,
            age: valueInputAge,
        });
        inputNameEl.current.value = "";
        inputAgeEl.current.value = "";
    }
    return (
        <Card className={style.input}>
            {valueError && (
                <ErrorModal
                    title={valueError.title}
                    message={valueError.message}
                    closeModal={setValueError}
                />
            )}

            <form>
                <label htmlFor="username">User Name</label>
                <input id="username" type="text" ref={inputNameEl} />
                <label htmlFor="age">Age</label>
                <input id="age" type="number" ref={inputAgeEl} />
                <Button type="button" onClick={handlerButton}>
                    Add User
                </Button>
            </form>
        </Card>
    );
}

export default AddUser;
