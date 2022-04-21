import ExpenseItems from "../Expenses/ExpenseItem";
import '../Expenses/Expenses.css';
import Card from '../UI/Card';
function Expenses(props) {

  const expenses = props.expenses.map((expense,id)=>{
       return (
        <div key={id}>
       <ExpenseItems
        id={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}>
        </ExpenseItems>
        </div>)
  })
  return (
        <Card className="expenses">
          {expenses}
      

   
    
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