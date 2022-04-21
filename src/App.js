import logo from './logo.svg';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import React, {useState} from 'react';
function App() {

  const [expenses,updateExpenses] = useState([
    {
      id: "1",
      title: 'Car Insurance',
      amount: 250.5,
      date: new Date(2022, 10, 2)
    },
    {
      id: "2",
      title: 'Health Insurance',
      amount: 125,
      date: new Date(2022, 7, 14)
    },
    {
      id: "3",
      title: 'Medical Premium',
      amount: 500,
      date: new Date(2022, 8, 15)
    }
  ]);
  const addExpenseHandler = (expenseData)=>{
   const newExpenseData = {
      ...expenseData,
      id : Math.random().toString()
    }
    console.log('Added Data',newExpenseData);
    updateExpenses((prevState)=>{
      return [...prevState,newExpenseData];
    })
    console.log(expenses);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Namandeep here</p>

        <NewExpense onAddExpense={addExpenseHandler}/>
        <Expenses expenses={expenses}/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
