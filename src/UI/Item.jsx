import React from 'react'

const Item = ({expense, index,removeExpense}) => {
const {cost,description,type} = expense;

let classes ="flex p-2 rounded-lg bg-[#1c2540] "
//  switch (type) {
//   case "Ostatní":
//         classes+="bg-[#fad1fa]"
//     break;
//   case "Potraviny":
//         classes+="bg-[#faedcb]"
//     break;
//   case "Restaurace":
//         classes+="bg-[#c9e4de]"
//     break;
//   case "Oblečení":
//         classes+="bg-[#f2c6de]"
//     break;
//   case "Sport":
//         classes+="bg-[#dbcdf0]"
//     break;
//   case "Spoření":
//         classes+="bg-[#f1f7b5]"
//     break;
//   case "Drogerie":
//         classes+="bg-[#f7d9c4]"
//     break;
 
//   default:
//     break;
//  }




  return (
    <li className={classes} key={"tr" + index}>
            <p className="w-[8rem]">{cost}</p>
            <p className="w-2/4">{description||type}</p>
            <button onClick={() => removeExpense(index)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
            </button>
          </li>
  )
}

export default Item
