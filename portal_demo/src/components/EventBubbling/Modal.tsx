import { useEffect } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("event-bubbling-modal-root");
function Modal(props) {
  const modalElement = document.createElement("div");

  useEffect(() => {
    modalRoot.appendChild(modalElement);
    return () => {
      modalRoot?.removeChild(modalElement);
    };
  }, [modalElement]);
  return createPortal(props.children, modalElement);
}

export default Modal;
