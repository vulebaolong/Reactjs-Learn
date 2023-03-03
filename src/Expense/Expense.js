import React, { useState } from "react";
import ExpenseContent from "./components/ExpenseContent/ExpenseContent.js";
import NewExpense from "./components/NewExpense/NewExpense.js";
import "./Expense.css";

const INIT_EXPENSE = [
    {
        id: 1,
        title: "Product 1",
        price: 10,
        date: new Date(2020, 2, 14),
    },
    {
        id: 2,
        title: "Product 2",
        price: 20,
        date: new Date(2020, 2, 14),
    },
    {
        id: 3,
        title: "Product 2",
        price: 20,
        date: new Date(2020, 3, 14),
    },
    {
        id: 4,
        title: "Product 2",
        price: 20,
        date: new Date(2020, 3, 15),
    },
];

function Expense(props) {
    const [expenseItem, setExpenseItem] = useState(INIT_EXPENSE);
    function saveDataForm(data) {
        setExpenseItem((prev) => {
            data = {
                ...data,
                date: new Date(data.date),
            };
            return [data, ...prev];
        });
    }
    return (
        <div className="expense">
            <NewExpense onDataForm_App={saveDataForm}></NewExpense>
            <ExpenseContent data={expenseItem} />
        </div>
    );
}

export default Expense;
