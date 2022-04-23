import React from 'react';
import './ExpensesFilter.css';
const ExpensesFilter = (props)=>{
    const handleFilterChange = (event)=>{
        //console.log(event.target.value); //Added by Namandeep Singh
        props.onFilterChange(event.target.value);  //sending data from child to parent by calling parent function
    }
return(
    <div className='expenses-filter'>
     <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={handleFilterChange}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
);
}
export default ExpensesFilter;