import React,{useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";


let DUMMY_EXPENSE = [{
    id: 'e1',
    title:"School fees",
    amount: 25000,
    date:new Date(2021,5,12)

},
{
    id: 'e2',
    title:"Books",
    amount: 250,
    date:new Date(2021,3,10)

},
{
    id: 'e3',
    title:"Food",
    amount: 2100,
    date:new Date(2021,7,2)

},
{
    id: 'e4',
    title:"Cloths",
    amount: 2500,
    date:new Date(2021,9,1)

}];
const App = ()=>{

    const [expenses,setexpenses] = useState( DUMMY_EXPENSE);


const addExpenseHandler = (expense)=>{
  const updatedExpense=[expense, ...expenses];
    setexpenses(updatedExpense);
};

    return( <div>
     <NewExpense onAddExpense={addExpenseHandler}/>  
     <Expenses item={expenses}/>
    </div>)
}
export default App;