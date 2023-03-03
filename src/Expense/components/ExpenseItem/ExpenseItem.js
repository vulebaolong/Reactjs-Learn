import React from "react";

import ExpenseDate from "../ExpenseDate/ExpenseDate.js";
import "./ExpenseItem.css";

function ExpenseItem(props) {
    const datas = props.data;
    const itemContent = () => {
        if (datas.length > 0) {
            return datas.map((data) => {
                return (
                    <div className="expense-item " key={data.id}>
                        <ExpenseDate date={data.date} />
                        <div className="expense-item__description">
                            <h2>{data.title}</h2>
                            <div className="expense-item__price">${data.price}</div>
                        </div>
                    </div>
                );
            });
        } else {
            return <p className="expenses-list__fallback">Không tìm thấy</p>;
        }
    };

    return <>{itemContent()}</>;
}

export default ExpenseItem;
