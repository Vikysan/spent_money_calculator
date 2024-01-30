import { useRef,forwardRef,useImperativeHandle } from "react";
import Item from "../UI/Item";

const Table = forwardRef (({ expenses, removeExpense },ref) => {
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

  return (
    <div className="overflow-y-auto w-full h-full ">
      <ul className="w-full space-y-1 p-2" ref={tableRef}>
        {expenses.map((expense, index) => (
          <Item expense={expense} index={index} removeExpense={removeExpense}/>
        ))}
      </ul>
    </div>
  );
});

export default Table;
