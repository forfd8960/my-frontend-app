import "./App.css";
import { useState } from "react";

import ListGroup from "./components/ListGroup";
import Modal from "./components/Modal";
import LoadModal from "./components/LoadModal";

import OrderBy from "./components/OrderBy";
import ListData from "./components/ListData";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    if (!isModalOpen) {
      console.log("---loading Closeing---");
    }
    
    setIsModalOpen(!isModalOpen);
  };

   const options = [
     { label: "Fruits", value: "fruits" },
     { label: "Vegetables", value: "vegetables" },
     { label: "Meats", value: "meats" },
   ];

   const items = {
     fruits: ["Apple", "Banana", "Orange"],
     vegetables: ["Carrot", "Broccoli", "Spinach"],
     meats: ["Chicken", "Beef", "Pork"],
   };

   const [selectedValue, setSelectedValue] = useState(options[0].value);
   const [listItems, setListItems] = useState(items[options[0].value]);

   const handleChange = (event) => {
     const newValue = event.target.value;
     setSelectedValue(newValue);
     setListItems(items[newValue]);
   };

  return (
    <>
      <ListGroup />
      <LoadModal onClick={toggleModal} />
      <Modal isOpen={isModalOpen} onClose={toggleModal} />

      <div style={{ padding:"50px" }}>
        <OrderBy
          options={options}
          selectedValue={selectedValue}
          onChange={handleChange}
        />
        <ListData items={listItems} />
      </div>
    </>
  );
}

export default App;


