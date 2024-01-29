import { useState } from "react";

import Table from "./components/Table";
import InputForm from "./components/InputForm";

function App() {

  const [expenses,setExpenses] = useState([{
    cost:500,
    description:"lidl"
  }])
  const addExpense = (newExpends)=>{
    setExpenses(prevExpenses=>[newExpends,...prevExpenses])
  }

  const removeExpense = (id) =>{
    setExpenses(prevExpenses=>prevExpenses.filter((_,index)=>index!==id))
  }
 
  return (
    <main className="bg-blue-300 w-screen min-h-screen  ">
      <div className="w-96 flex flex-col  items-center justify-center">

     <Table expenses={expenses} removeExpense={removeExpense}/>
     <InputForm addExpense={addExpense}/>
      </div>
    </main>
  );
}

export default App; 
