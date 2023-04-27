import React from 'react';
import ExpenseItem from './Expenseitem';

//created const ExpenseList function
const ExpenseList = () => {
    const expenses = [
        
        {id:'12', name:'shopping', cost:'40'},
        {id:'13', name:'travelling', cost:'60'},
        {id:'14', name:'groceries', cost:'120'}  

    ];

    //Through the expenseItem it is passing id,name,cost from expenseList to expenseItem


    return (

        <ul className = "list-group">
        
           {expenses.map((expense) => (
            <ExpenseItem id = {expense.id} name = {expense.name} cost = {expense.cost}/>
           ))}

        </ul>
           
           
          
    );
              
             
}
export default ExpenseList;