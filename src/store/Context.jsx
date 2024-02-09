import { createContext, useReducer,useEffect } from 'react';

export const ExpensesContext = createContext( { expenses: [],
    sum:0, 
    addExpense:()=>{}, 
    removeExpense:()=>{},
});

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

export function ExpensesContextProvider(props) {
    const [expenses, dispatchExpenses] = useReducer(expensesReducer, []);
    const sum = expenses.reduce((acc, cur) => acc + cur.cost, 0);
    const sumInCurrencyFormat = Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'CZK',
    }).format(sum)


    const addExpense = (newExpends) => {
        dispatchExpenses({ type: "ADD", value: newExpends });
    };

    const removeExpense = (id) => {
        dispatchExpenses({ type: "REMOVE", value: id });
    };

    useEffect(() => {
        if (localData.length) {
          dispatchExpenses({ type: "SET", value: localData });
        }
      }, []);

    return (
        <ExpensesContext.Provider value={
           { expenses,
            sum:sumInCurrencyFormat, 
            addExpense, 
            removeExpense,
        }
    }>
    { props.children }
    </ExpensesContext.Provider >
  )
}

export default ExpensesContext;