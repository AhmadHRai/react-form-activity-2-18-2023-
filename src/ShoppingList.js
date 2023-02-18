import "./styles.css";
import ShoppingItem from "./ShoppingItem.js";

export default function ShoppingList({ items, handleItemDelete }) {
  return (
    <div className="shopping-cart">
      <h3>Shopping cart</h3>
      {items.map((item, index) => {
        return (
          <ShoppingItem
            key={index}
            itemName={item}
            handleItemDelete={() => {
              handleItemDelete(index);
            }}
          />
        );
      })}
    </div>
  );
}
