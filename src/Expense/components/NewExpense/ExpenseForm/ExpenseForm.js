import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
    let initFormValue = {
        id: new Date().getTime(),
        title: "",
        price: "",
        date: "",
    };
    const [formValue, setFormValue] = useState(initFormValue);

    function titleHandler(event) {
        setFormValue((prev) => {
            return {
                ...prev,
                title: event.target.value,
            };
        });
    }
    function amountHandler(event) {
        setFormValue((prev) => {
            return {
                ...prev,
                price: event.target.value,
            };
        });
    }
    function dateHandler(event) {
        setFormValue((prev) => {
            return {
                ...prev,
                date: event.target.value,
            };
        });
    }
    function submithandler(event) {
        event.preventDefault();
        setFormValue(initFormValue);
        props.onDataForm_NewExpense(formValue);
        props.onHideForm();
    }

    return (
        <form onSubmit={submithandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input value={formValue.title} onChange={titleHandler} type="text" />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        value={formValue.price}
                        onChange={amountHandler}
                        type="number"
                        min="0.01"
                        step="0.01"
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        value={formValue.date}
                        onChange={dateHandler}
                        type="date"
                        min="2019-01-01"
                        max="2022-12-31"
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onHideForm}>
                    Cancel
                </button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;
