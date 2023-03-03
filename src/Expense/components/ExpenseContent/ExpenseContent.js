import React, { useState } from "react";
import "./ExpenseContent.css";

import ExpenseList from "../ExpenseList/ExpenseList.js";
import ExpenseFillter from "../ExpenseFillter/ExpenseFillter.js";
import ExpenseChart from "../ExpenseChart/ExpenseChart.js";

function ExpenseContent(props) {
    const [year, setYear] = useState("2019");
    function saveData(data) {
        setYear(data);
    }
    const dataFillter = props.data.filter((item) => {
        return item.date.getFullYear() === +year;
    });
    return (
        <div className="expenses-content">
            <ExpenseFillter select={year} onData_ExpenseFillter={saveData} />
            <ExpenseChart dataPoints={dataFillter} />
            <ExpenseList dataList={dataFillter} />
        </div>
    );
}

export default ExpenseContent;
