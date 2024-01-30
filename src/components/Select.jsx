import {useState} from "react";

const Select = ({className,onChange,value,...props}) => {
   
  const classes = "";
  return (
    <select
      
      {...props}
      name="selector"
      className={` ${className}`}
      id="selectType"
      onChange={onChange}
      value = {value}
    >
      <option className={"bg-[#fad1fa] " + classes} value="Ostatní">
        Ostatní
      </option>
      <option className={"bg-[#faedcb] " + classes} value="Potraviny">
        Poraviny
      </option>
      <option className={"bg-[#c9e4de] " + classes} value="Restaurace">
        Restaurace
      </option>
      <option className={"bg-[#f7d9c4] " + classes} value="Drogerie">
        Drogerie
      </option>
      <option className={"bg-[#f2c6de] " + classes} value="Oblečení">
        Oblečení
      </option>
      <option className={"bg-[#dbcdf0] " + classes} value="Sport">
        Sport
      </option>
      <option className={"bg-[#f1f7b5] " + classes} value="Spoření">
        Spoření
      </option>
    </select>
  );
};

export default Select;
