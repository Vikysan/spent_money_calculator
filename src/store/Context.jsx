import { createContext, useContext } from 'react';






export const ExpensesContext = createContext(null);









export default function ExpensesContextProvider(props) {
  return (
    <ExpensesContext.Provider value="dark">
       {props.children}
    </ExpensesContext.Provider>
  )
}