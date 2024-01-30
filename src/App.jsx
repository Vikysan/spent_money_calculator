import { useState, useEffect, useRef } from "react";
import Table from "./components/Table";
import InputForm from "./components/InputForm";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [sumExpenses, setSumExpenses] = useState(0);
  const tableRef = useRef()

  //check local storage and get date to useState
  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("user"));
    console.log(localData);
    if (localData?.length) {
      setExpenses(localData);
    }
  }, []);

  // set Summary every expenses,save to locale storage 
  useEffect(() => {
    const summary = expenses.reduce((acc, cur) => acc + cur.cost, 0);
    setSumExpenses(
      new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "CZk",
        unitDisplay: "narrow",
        maximumSignificantDigits: 6,
      }).format(summary)
    );
    localStorage.setItem("user", JSON.stringify(expenses));
      //set view to bottom of table
    tableRef.current.scrollToBottom()
  }, [expenses]);

  const addExpense = (newExpends) => {
    setExpenses((prevExpenses) => [...prevExpenses, newExpends]);
  };

  const removeExpense = (id) => {
    setExpenses((prevExpenses) =>
      prevExpenses.filter((_, index) => index !== id)
    );
  };

  return (
    <main className="bg-[#161f3b] w-screen h-dvh  text-[#9094a3] flex justify-center p-3">
      <div className="w-full min-w-80 md:w-96 flex flex-col  items-center justify-between bg-[#242e4c] rounded-xl gap-4 pt-3">
        <h2 className="text-3xl">
          {sumExpenses}
        </h2>

        <Table ref={tableRef} expenses={expenses} removeExpense={removeExpense} />
        <InputForm addExpense={addExpense} />
      </div>
    </main>
  );
}

export default App;
