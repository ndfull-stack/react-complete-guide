
import '../Expenses/Expenses.css';
import ExpensesFilter from "./ExpensesFilter";
import Card from '../UI/Card';
import React,{useState} from 'react'
import ExpensesList from "./ExpensesList";

function Expenses(props) {

  const [filterYear,setFilterYear] = useState('2022');
  const filterExpenses =  props.expenses.filter(expense=> expense.date.getFullYear().toString() === filterYear);
  
  const handleFilterValueChange = (selectedYear)=>{
    setFilterYear(selectedYear);
  }
  
  return (
        <Card className="expenses">
          <ExpensesFilter selected={filterYear} onFilterChange={handleFilterValueChange}/>
          <ExpensesList expenseItems={filterExpenses}/>
      {/* <ExpenseItems
        id={props.expenses[0].id}
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date.toString()}
      ></ExpenseItems>
      <ExpenseItems
        id={props.expenses[1].id}
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
        date={props.expenses[1].date.toString()}>
      </ExpenseItems>
      <ExpenseItems
        id={props.expenses[2].id}
        title={props.expenses[2].title}
        amount={props.expenses[2].amount}
        date={props.expenses[2].date.toString()}>
      </ExpenseItems> */}
     </Card>
  );

}
export default Expenses;