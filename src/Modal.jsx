import React from "react";
import "./styles.css";
import ReactDom from "react-dom";
export default function Modal({ open, children, onClose }) {
  return ReactDom.createPortal(
    <>
      <div className="overlay" />
      <div className="box">
        <button onClick={onClose}>Close Modal</button>
        {children}
      </div>
    </>,
    document.getElementById("portal")
  );
}
