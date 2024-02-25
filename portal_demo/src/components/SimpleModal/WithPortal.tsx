import React, { useState } from "react";
import ModalContent from "./ModalContent";
import { createPortal } from "react-dom";

const simpleModalRoot = document.getElementById("simple-modal-root");

function WithPortal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <br />
      This is Without Portal
      <br />
      <br />
      <button onClick={() => setShowModal(true)}>Show Modal</button>
      {showModal &&
        createPortal(
          <ModalContent handleCloseModal={() => setShowModal(false)} />,
          simpleModalRoot
        )}
    </div>
  );
}

export default WithPortal;
