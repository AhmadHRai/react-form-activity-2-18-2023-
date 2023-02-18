import { useState } from "react";
import "./styles.css";

export default function Form({ handleFormChange }) {
  const [itemText, setItemText] = useState("");

  return (
    <form>
      <h3>Shopping cart</h3>
      <div className="mb-3">
        <label>Item</label>
        <input
          type="text"
          value={itemText}
          onChange={(e) => setItemText(e.target.value)}
          className="form-control"
          placeholder="item"
        />
      </div>
      <div className="d-grid">
        <button
          onClick={(e) => {
            e.preventDefault();
            if (itemText === "") return;
            handleFormChange(itemText);
            setItemText("");
          }}
          type="submit"
          className="btn btn-primary">
          Add
        </button>
      </div>
    </form>
  );
}
