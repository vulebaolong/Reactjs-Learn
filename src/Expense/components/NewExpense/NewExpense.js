import React, { useState } from "react";
import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm/ExpenseForm.js";

function NewExpense(props) {
    const [isForm, setIsForm] = useState(false);
    function saveDataForm(data) {
        props.onDataForm_App(data);
    }

    function hideForm(params) {
        setIsForm(false);
    }

    function showForm(params) {
        setIsForm(true);
    }

    return (
        <div className="new-expense">
            {!isForm && <button onClick={showForm}>Add New Expense</button>}
            {isForm && <ExpenseForm onDataForm_NewExpense={saveDataForm} onHideForm={hideForm} />}
        </div>
    );
}

export default NewExpense;
