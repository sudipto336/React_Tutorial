import React, { forwardRef, useState } from "react";
import InputComponent from "./InputComponent";

const FormField = forwardRef(function ({ label, isRequired }, ref) {
  const [value, setValue] = useState<string>("");
  return (
    <div>
      <InputComponent
        ref={ref}
        value={value}
        label={label}
        onChange={(e) => setValue(e.target.value)}
      />
      {isRequired && value === "" && <i>Required</i>}
    </div>
  );
});

export default FormField;
