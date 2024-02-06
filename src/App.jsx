import {useEffect, useRef, useReducer } from "react";
import Table from "./components/Table";
import InputForm from "./components/InputForm";

const expensesReducer = (state, action) => {
  let newState = state;
  if (action.type === "REMOVE") {
    newState = [...state.filter((_, index) => index !== action.value)];
    localStorage.setItem("user", JSON.stringify(newState));
  }
  if (action.type === "ADD") {
    newState = [...state, action.value];
    localStorage.setItem("user", JSON.stringify(newState));
  }
  if (action.type === "SET") {
    newState = [...action.value];
  }
  return newState;
};

const localData = JSON.parse(localStorage.getItem("user")) || [];

function App() {

  const [expenses, dispatchExpenses] = useReducer(expensesReducer, []);

  const tableRef = useRef();

  const sum = expenses.reduce((acc, cur) => acc + cur.cost, 0);
  const sumInCurrencyFormat = Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'CZK',
}).format(sum)


  useEffect(() => {
    if (localData.length) {
      dispatchExpenses({ type: "SET", value: localData });
    }
  }, []);

  useEffect(() => {
    tableRef.current.scrollToBottom();
  }, [expenses]);

  const addExpense = (newExpends) => {
    dispatchExpenses({ type: "ADD", value: newExpends });
  };

  const removeExpense = (id) => {
    dispatchExpenses({ type: "REMOVE", value: id });
  };

  return (
    <main className="bg-[#161f3b] w-screen h-dvh  text-[#9094a3] flex justify-center p-3">
      <div className="w-full min-w-80 md:w-96 flex flex-col  items-center justify-between bg-[#242e4c] rounded-xl gap-4 pt-3">
        <h2 className="text-3xl">{sumInCurrencyFormat}</h2>

        <Table
          ref={tableRef}
          expenses={expenses}
          removeExpense={removeExpense}
        />
        <InputForm addExpense={addExpense} />
      </div>
    </main>
  );
}

export default App;
