import { useRef, useEffect, useState } from "react";
import Select from "./Select";

const InputForm = ({ addExpense }) => {
  const numberInputRef = useRef();
  const textInputRef = useRef();
  const [selectedType, setSelectedType] = useState("Ostatní");

  const getNewExpense = () => {
    const newExpense = {
      cost: parseInt(numberInputRef.current.value.trim()),
      description: textInputRef.current.value.trim(),
      type: selectedType,
      date: new Date(),
    };
    console.log(newExpense);
    if (newExpense.cost !== "") {
      addExpense(newExpense);
    }
    document.getElementById("costs").value = "";
    document.getElementById("description").value = "";
  };

  const selectTypeHandle = (e) => {
    setSelectedType(e.target.value);
  };

  return (
    <div className="w-full  flex flex-col justify-center  border-t-2 border-[#161f3b] p-2 gap-1">
      <input
        type="number"
        className="w-full bg-[#242e4c] border border-[#161f3b] p-2 pl-3"
        id="costs"
        ref={numberInputRef}
        placeholder="Částka"
      />

      <input
        type="text"
        className="w-full bg-[#242e4c] border border-[#161f3b] p-2 pl-3"
        id="description"
        ref={textInputRef}
        placeholder="Popis"
      />

      <Select
        onChange={selectTypeHandle}
        value={selectedType}
        className="w-full bg-[#242e4c] border border-[#161f3b] p-2"
      />
      <button
        className="w-full flex justify-center border  rounded-b-lg bg-[#161f3b] border-[#161f3b] py-2 mt-4"
        onClick={getNewExpense}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </button>
    </div>
  );
};

export default InputForm;
