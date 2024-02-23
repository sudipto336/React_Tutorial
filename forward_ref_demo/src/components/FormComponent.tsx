import React, { useRef } from "react";
import FormField from "./FormField";

function FormComponent() {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current.focus();
  };

  return (
    <div>
      <form>
        <FormField label="Enter your name: " isRequired={true} ref={ref} />
        <button type="button" onClick={handleClick}>
          Edit
        </button>
      </form>
    </div>
  );
}

export default FormComponent;
