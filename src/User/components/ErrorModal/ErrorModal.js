import React from "react";
import PortalReactDOM from "react-dom";

import style from "./ErrorModal.module.css";
import Button from "../UI/Button/Button.js";

function ErrorModal(props) {
    function handlerCloseModal(params) {
        props.closeModal();
    }

    function Backdrop(props) {
        return <div className={style.backdrop} onClick={props.handlerCloseModal}></div>;
    }

    function Modal(props) {
        return (
            <div className={style.modal}>
                <header className={style.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={style.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={style.actions}>
                    <Button onClick={handlerCloseModal}>Oke</Button>
                </footer>
            </div>
        );
    }

    return (
        <>
            {PortalReactDOM.createPortal(
                <Backdrop handlerCloseModal={handlerCloseModal}></Backdrop>,
                document.getElementById("backdrop-root")
            )}
            {PortalReactDOM.createPortal(
                <Modal title={props.title} message={props.message}></Modal>,
                document.getElementById("modal-root")
            )}
        </>
    );
}

export default ErrorModal;
