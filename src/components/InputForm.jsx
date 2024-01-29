import { useRef, useEffect } from "react";

const InputForm = ({ addExpense }) => {
  const numberInputRef = useRef();
  const textInputRef = useRef();
  const getNewExpense = () => {
    const newExpense = {
      cost: parseInt(numberInputRef.current.value.trim()),
      description: textInputRef.current.value.trim(),
      date: new Date(),
    };
    if (newExpense.cost !== "" && newExpense.description !== "") {
      addExpense(newExpense);
    }
  };

  useEffect(() => {
    document.getElementById("costs").value = "";
    document.getElementById("description").value = "";
  });

  return (
    <div className="w-full  flex space-x-2 justify-between border-t-2 border-[#161f3b] p-5">
      <div className="">
        {/* <label htmlFor="costs">částka</label> */}
        <input
          type="number"
          className="w-full bg-[#242e4c] border border-[#161f3b] p-2"
          id="costs"
          ref={numberInputRef}
          placeholder="částka"
        />
      </div>
      <div className=" overflow-hidden">
        {/* <label htmlFor="description">popis</label> */}
        <input
          type="text"
          className="w-full bg-[#242e4c] border border-[#161f3b] p-2 "
          id="description"
          ref={textInputRef}
          placeholder="popis"
        />
      </div>
      <button
        className=" text-center capitalize  border-[#161f3b]  "
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
