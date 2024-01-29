import React from "react";

const Table = ({expenses,removeExpense}) => {
  return (
    <ul className="w-full border h-[20rem]">
        {expenses.map((expense,index)=> <li className="flex" key={"tr"+index}>
          <p className="w-[8rem]">{expense.cost}</p>
          <p className="w-2/4">{expense.description}</p>
          <button onClick={()=>removeExpense(index)}>smazat</button>
        </li>)}
    </ul>
  );
};

export default Table;
