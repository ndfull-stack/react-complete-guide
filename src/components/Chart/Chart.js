import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';
const Chart = props =>{

    const dataPoints = [
        {label : 'Jan', value : 0 },
        {label : 'Feb', value : 0 },
        {label : 'Mar', value : 0 },
        {label : 'Apr', value : 0 },
        {label : 'May', value : 0 },
        {label : 'Jun', value : 0 },
        {label : 'Jul', value : 0 },
        {label : 'Aug', value : 0 },
        {label : 'Sep', value : 0 },
        {label : 'Oct', value : 0 },
        {label : 'Nov', value : 0 },
        {label : 'Dec', value : 0 }
    ];

    const monthsAndAmountList = props.expenses.map(expense => { return {month : expense.date.getMonth(),amount : expense.amount}});
    console.log(monthsAndAmountList);
    monthsAndAmountList.forEach(data =>{
        dataPoints[data.month].value = data.amount; 
    }
    )
    const maxAmount = Math.max(...dataPoints.map(data => data.value));
    if(props.expenses.length === 0){
        return <></>
    }
    return <div className='chart'>
        {dataPoints.map((dataPoint) =>{
           return <ChartBar 
           key = {dataPoint.label}
           label={dataPoint.label} amount={dataPoint.value} 
           fill = {dataPoint.value / maxAmount  * 100 + '%'}
           maxValue={maxAmount}/>
        })}
       
    </div>
}
export default Chart;