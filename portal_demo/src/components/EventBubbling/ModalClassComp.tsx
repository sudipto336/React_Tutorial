import React, { Component } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("event-bubbling-modal-root");

export default class ModalClassComp extends Component {
  constructor(props) {
    super(props);
    this.modalEl = document.createElement("div");
  }
  componentDidMount(): void {
    modalRoot.appendChild(this.modalEl);
  }
  componentWillUnmount(): void {
    modalRoot?.removeChild(this.modalEl);
  }
  render() {
    return createPortal(this.props.children, this.modalEl);
  }
}
