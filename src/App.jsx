import { useState, useEffect } from "react";

import Table from "./components/Table";
import InputForm from "./components/InputForm";

const dummy = [
  {
    cost: 500,
    description: "lidl",
  },
  {
    cost: 500,
    description: "lidl",
  },
  {
    cost: 500,
    description: "lidl",
  },
  {
    cost: 5000,
    description: "lidl",
  },
  {
    cost: 500,
    description: "lidl",
  },
  {
    cost: 500,
    description: "lidl",
  },
  {
    cost: 500,
    description: "lidl",
  },
  {
    cost: 500,
    description: "lidl",
  },
  {
    cost: 500,
    description: "lidl",
  },
  {
    cost: 5000,
    description: "lidl",
  },
  {
    cost: 500,
    description: "lidl",
  },
  {
    cost: 500,
    description: "lidl",
  },
  {
    cost: 500,
    description: "lidl",
  },
  {
    cost: 5000,
    description: "lidl",
  },
  {
    cost: 500,
    description: "lidl",
  },
  {
    cost: 5000,
    description: "lidl",
  },
  {
    cost: 500,
    description: "lidl",
  },
  {
    cost: 500,
    description: "lidl",
  },
  {
    cost: 500,
    description: "lidl",
  },
  {
    cost: 5000,
    description: "lidl",
  },
  {
    cost: 500,
    description: "lidl",
  },
];

function App() {
  const [expenses, setExpenses] = useState([]);
  const [sumExpenses, setSumExpenses] = useState(0);

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("user"));
    console.log(localData);
    if (localData?.length) {
      setExpenses(localData);
    }
  }, []);

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
    <main className="bg-[#161f3b] w-screen h-dvh  text-[#9094a3] flex justify-center p-5">
      <div className="w-96 flex flex-col  items-center justify-between bg-[#242e4c] rounded-xl gap-4 pt-3">
        <h2 className="text-3xl">
          {sumExpenses}
        </h2>

        <Table expenses={expenses} removeExpense={removeExpense} />
        <InputForm addExpense={addExpense} />
      </div>
    </main>
  );
}

export default App;
