import { useState } from "react";
import "./styles.css";
import Modal from "./Modal";

//portal will inject the rendered dom inside what we specified rather than root element by default
// best case scenrio is the pop up box

export default function App() {
  const [showModal, setShowmodal] = useState(false);
  return (
    <>
      <div className="MainSection" onClick={() => console.log("Hello")}>
        <Modal></Modal>
      </div>
      <div className="OtherContent">This is other content</div>
    </>
  );
}
