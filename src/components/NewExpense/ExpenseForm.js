import React, { useState } from 'react';
import './ExpenseForm.css';
const ExpenseForm = (props) => {

    // const [enteredTitle, setEnteredTitle] = useState('');
    // const [enteredAmount, setEnteredAmount] = useState('');
    // const [enteredDate, setEnteredDate] = useState('');

    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    });

    //const [userInput]

    const titleChangeHandler = (event) => {
        setUserInput((prevState) => {
            return {
                ...prevState, enteredTitle: event.target.value
            }

        })
    }
    const amountChangeHandler = (event) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                enteredAmount: event.target.value
            }
        })
    }
    const dateChangeHandler = (event) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                enteredDate: event.target.value
            }
        })
    }
    // const titleChangeHandler = (event)=>{
    //     setUserInput({
    //         ...userInput,
    //         enteredTitle : event.target.value
    //     });
    // }

    // const amountChangeHandler = (event)=>{
    //     setUserInput({
    //         ...userInput,
    //         enteredAmount : event.target.value
    //     });
    // }

    // const dateChangeHandler = (event)=>{
    //     setUserInput({
    //         ...userInput,
    //         enteredDate : event.target.value
    //     });
    // }

    const expenseData = {
        title: userInput.enteredTitle,
        amount: userInput.enteredAmount,
        date: new Date(userInput.enteredDate)
    }
    const addExpenseHandler = (event) => {
        event.preventDefault();
        console.log(expenseData);
        props.onSaveExpenseData(expenseData); //calling parent function from child
        setUserInput({
            enteredTitle: '',
            enteredAmount: '',
            enteredDate: ''
        })

        // return [enteredTitle,enteredAmount,enteredDate]
    }
    return (
        <form onSubmit={addExpenseHandler}>
            <div className='new-expense__controls'>

                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={userInput.enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min="0.01" step="0.01"
                        value={userInput.enteredAmount}
                        onChange={amountChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Expense Date</label>
                    <input type='date' min="20  19-01-01" max="2025-01-01"
                        value={userInput.enteredDate}
                        onChange={dateChangeHandler} />
                </div>
                <div className='new-expense__actions'>
                    <button type="submit">Add Expense </button>
                </div>


            </div>
        </form>
    );

}
export default ExpenseForm;