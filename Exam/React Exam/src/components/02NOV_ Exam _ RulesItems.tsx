import { CartProvider } from "./02NOV_ Exam _ CartContext";
import Item from "./02NOV_ Exam _ Items";
import Carts from "./02NOV_ Exam _ Cart";

const ItemRules= () => {
  return (
    <CartProvider>
      <div>
        <Item />
        <Carts />
      </div>
    </CartProvider>
  );
};

export default ItemRules;


