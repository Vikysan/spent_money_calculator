import { useRef } from "react";

const InputForm = ({ addExpense }) => {
  const numberInputRef = useRef();
  const textInputRef = useRef();
  const getNewExpense = () => {
    const newExpense = {
      cost: numberInputRef.current.value,
      description: textInputRef.current.value,
    };
    addExpense(newExpense);
  };
  return (
    <div className="w-full border flex space-x-2">
      <div className="w-1/4">
        <label htmlFor="costs">částka</label>
        <input type="number" className="w-full" id="costs" ref={numberInputRef} placeholder="částka" />

      </div>
      <div className="w-2/5 overflow-hidden">
        <label htmlFor="description">popis</label>
        <input type="text" className="w-full" id="description" ref={textInputRef} placeholder="popis" />

      </div>
        <button onClick={getNewExpense}>přidat</button>
    </div>
  );
};

export default InputForm;
