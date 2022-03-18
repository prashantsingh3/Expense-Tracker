import React from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItems.css";
import Card from "../UI/card";
const ExpenseItems =(props)=>{


    return(<Card className="expense-item">
    <ExpenseDate date={props.date}/>
    
    <div className="expense-item__description">
        <h2>{props.title}</h2>
    </div>
    <div className="expense-item__price">${props.amount}</div>
   
    
</Card>)
}
export default ExpenseItems;