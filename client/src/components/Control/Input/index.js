import React from "react";
import { WrapInput } from "./index.style";

const Input = ({
  text,
  value,
  placeholder,
  className,
  iconInput,
  ...props
}) => {
  return (
    <WrapInput className={className}>
      <div className="input-icon">{iconInput}</div>
      <input type="text" placeholder={placeholder} {...props} value={value}/>
    </WrapInput>
  );
};

export default Input;
