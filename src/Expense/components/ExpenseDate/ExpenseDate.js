import React from "react";

import "./ExpenseDate.css";

function ExpenseDate(props) {
    const newDate = new Date(props.date);
    const month = `${newDate.getMonth() + 1}`.padStart(2, 0);
    const day = `${newDate.getDate()}`.padStart(2, 0);
    const year = newDate.getFullYear();
    return (
        <div className="expense-date">
            <div className="expense-date__month">Tháng: {month}</div>
            <div className="expense-date__day">{day}</div>
            <div className="expense-date__year">Năm: {year}</div>
        </div>
    );
}

export default ExpenseDate;
