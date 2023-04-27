import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Budget from './Components/Budget';
import Expense from './Components/Expense';
import Remaining from './Components/Remaining';
import ExpenseList from './Components/Expenselist';
import AddExpenseForm from './Components/AddExpenseForm';


function App() {
  return (
    <div className = "container">
      
      <h1 className="mt-3"> My Budget Planner </h1>
        <div className = "row">

          <div className = "col-sm">
             <Budget/>

           
          </div>


          <div className = "col-sm">
              
              <Expense/>
            
          </div>


          <div className = "col-sm">
              
              <Remaining/>
            
          </div>

          <h3 className='mt-3'>Expenses</h3>
			  <div className='row mt-3'>
				  <div className='col-sm'>
					<ExpenseList />
				  </div>
			  </div>

        <h3 className = 'mt-3'>Add Expense Form</h3>

        <div className='row mt-3'>
				<div className='col-sm'>
					<AddExpenseForm/>
				</div>
			</div>






        </div>


    </div>
  );
}

export default App;
