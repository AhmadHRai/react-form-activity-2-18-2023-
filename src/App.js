import { useState } from "react";
import Form from "./Form";
import ShoppingList from "./ShoppingList";
import "./styles.css";

export default function App() {
  const [items, setItems] = useState([]);

  const handleFormChange = (item) => {
    setItems([...items, item]);
  };

  const handleItemDelete = (itemIndex) => {
    const filteredItems = items.filter((item, index) => {
      return index !== itemIndex;
    });
    setItems(filteredItems);
  };

  return (
    <div className="card">
      <Form handleFormChange={handleFormChange} />
      <ShoppingList items={items} handleItemDelete={handleItemDelete} />
    </div>
  );
}
