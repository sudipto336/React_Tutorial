import React, { forwardRef } from "react";

const InputComponent = forwardRef(function (props, ref) {
  const { label, ...otherProps } = props;
  return (
    <div>
      <label>
        {label}
        <input {...otherProps} ref={ref} />
      </label>
    </div>
  );
});

export default InputComponent;
