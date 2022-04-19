import '../Expenses/ExpenseItem.css';
import ExpenseDate from '../Expenses/ExpenseDate';
import Card from '../UI/Card';
function ExpenseItem(props) {


    return (
        <Card className="expense-item">
            {/* <div>Namandeep Singh</div> */}
            <div className="expense-item__description">

                <ExpenseDate date={props.date} />
                <h2>{props.id}</h2>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>


            </div>
        </Card>)
}

export default ExpenseItem;