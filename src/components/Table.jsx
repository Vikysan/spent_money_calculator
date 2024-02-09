import { useRef, forwardRef, useImperativeHandle, useContext } from "react";
import Item from "../UI/Item";
import ExpensesContext from "../store/Context";

const Table = forwardRef((_, ref) => {
  const ctx = useContext(ExpensesContext)
  const tableRef = useRef();
  useImperativeHandle(ref, () => {
    return {
      scrollToBottom() {
        const lastChildElement = tableRef.current?.lastElementChild;
        lastChildElement?.scrollIntoView({ behavior: "smooth" });
      },
      // scrollIntoView() {
      //   inputRef.current.scrollIntoView();
      // },
    };
  }, []);
  console.log("table")
  return (
    <div className="overflow-y-auto w-full h-full ">
      <ul className="w-full space-y-1 p-2" ref={tableRef}>
        {ctx.expenses.map((expense, index) => (
          <Item expense={expense} index={index} key={index + "item"} />
        ))}
      </ul>
    </div>
  );
});

export default Table;
