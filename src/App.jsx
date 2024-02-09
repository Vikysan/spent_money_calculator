import {useContext } from "react";
import Table from "./components/Table";
import InputForm from "./components/InputForm";
import ExpensesContext from "./store/Context";



function App() {

const ctx = useContext(ExpensesContext)

return (
    <main className="bg-[#161f3b] w-screen h-dvh  text-[#9094a3] flex justify-center p-3">
      <div className="w-full min-w-80 md:w-96 flex flex-col  items-center justify-between bg-[#242e4c] rounded-xl gap-4 pt-3">
        <h2 className="text-3xl">{ctx.sum}</h2>

        <Table/>
        <InputForm />
      </div>
    </main>
  );
}

export default App;
