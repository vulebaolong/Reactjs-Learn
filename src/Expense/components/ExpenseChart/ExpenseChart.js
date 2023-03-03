import React from "react";
import ChartBar from "./ChartBar/ChartBar.js";
import "./ExpenseChart.css";

function ExpenseChart(props) {
    console.log(props.dataPoints);
    let maxValue = 0;
    const dataPoints = [
        { label: "01", value: 0 },
        { label: "02", value: 0 },
        { label: "03", value: 0 },
        { label: "04", value: 0 },
        { label: "05", value: 0 },
        { label: "06", value: 0 },
        { label: "07", value: 0 },
        { label: "08", value: 0 },
        { label: "09", value: 0 },
        { label: "10", value: 0 },
        { label: "11", value: 0 },
        { label: "12", value: 0 },
    ];
    props.dataPoints.forEach((e) => {
        maxValue++;
        let month = `${e.date.getMonth() + 1}`.padStart(2, 0);
        if (month === dataPoints[month - 1].label) {
            dataPoints[month - 1].value++;
        }
    });

    console.log(maxValue);
    return (
        <div className="chart">
            {dataPoints.map((dataPoint) => {
                return (
                    <ChartBar
                        key={dataPoint.label}
                        value={dataPoint.value}
                        maxValue={maxValue}
                        label={dataPoint.label}
                    />
                );
            })}
        </div>
    );
}

export default ExpenseChart;
