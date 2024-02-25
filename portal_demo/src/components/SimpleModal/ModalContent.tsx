import React from "react";

function ModalContent({ handleCloseModal }) {
  return (
    <div>
      This is modal
      <button onClick={handleCloseModal}>Close Modal</button>
    </div>
  );
}

export default ModalContent;
