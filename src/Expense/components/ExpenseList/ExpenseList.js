import React from "react";
import "./ExpenseList.css";

import ExpenseItem from "../ExpenseItem/ExpenseItem.js";

function ExpenseList(props) {
    return (
        <li className="expenses-list">
            <ExpenseItem data={props.dataList} />
        </li>
    );
}

export default ExpenseList;
