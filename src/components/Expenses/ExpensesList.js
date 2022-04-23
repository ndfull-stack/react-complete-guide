import React from 'react';
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';
const ExpensesList = props =>{

    if(props.expenseItems.length === 0){
         return <p>No Expenses Found</p>;
  }

  return (
      <ul className='expenses-list'>
        {props.expenseItems.map((expense)=>{
         return (
         <ExpenseItem
          key={expense.id}
          id={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}/>
          )
    })
    }
    </ul>
  )
}
export default ExpensesList;