import "./App.css";
import { useState } from "react";

import ListGroup from "./components/ListGroup";
import Modal from "./components/Modal";
import LoadModal from "./components/LoadModal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    if (!isModalOpen) {
      console.log("---loading Closeing---");
    }
    
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <ListGroup />
      <LoadModal onClick={toggleModal} />
      <Modal isOpen={isModalOpen} onClose={toggleModal} />
    </>
  );
}

export default App;


