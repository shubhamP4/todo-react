import React from "react"
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm.js";
const NewExpense = () => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            //copy expense data
            ...enteredExpenseData,
            id: Math.random().toString()

        }
        console.log(expenseData);
    }
    return (
        <>
            <div className="new-expense">
                {/* saveExpenseDataHandler::this function will receive all values here */}
                <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
            </div>
        </>
    )
};
export default NewExpense;