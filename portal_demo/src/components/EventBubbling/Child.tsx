import React from "react";

function Child() {
  return (
    <div>
      This is the modal content passed as props children to Modal component
      <button>Click this for event bubbling</button>
    </div>
  );
}

export default Child;
