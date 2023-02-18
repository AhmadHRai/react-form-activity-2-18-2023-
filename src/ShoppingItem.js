import "./styles.css";

export default function ShoppingItem({ itemName, handleItemDelete }) {
  return (
    <div className="item">
      <li>{itemName}</li>
      <button onClick={handleItemDelete}>x</button>
    </div>
  );
}
