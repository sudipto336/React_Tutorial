import React, { useState } from "react";
import ModalContent from "./ModalContent";

function WithoutPortal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <br />
      This is Without Portal
      <br />
      <br />
      <button onClick={() => setShowModal(true)}>Show Modal</button>
      {showModal && (
        <ModalContent handleCloseModal={() => setShowModal(false)} />
      )}
    </div>
  );
}

export default WithoutPortal;
