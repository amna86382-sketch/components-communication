
import { useState } from "react";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
function App() {
  // Products Array
  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 80000,
    },
    {
      id: 2,
      name: "Mobile",
      price: 40000,
    },
    {
      id: 3,
      name: "Headphones",
      price: 3000,
    },
    {
      id: 4,
      name: "Keyboard",
      price: 2500,
    },
    {
      id: 5,
      name: "Mouse",
      price: 1500,
    },
    {
      id: 6,
      name: "Smart Watch",
      price: 5000,
    },
  ];
  // Cart State
  const [cart, setCart] = useState([]);
  // Add Product To Cart
  function addToCart(product) {

    let existingProduct = cart.find(
      (item) => item.id === product.id
    );
    if (existingProduct) {

      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );

    } else {
      setCart([
        ...cart,
        { ...product, quantity: 1 }
      ]);

    }
  }
  // Increase Quantity
  function increaseQuantity(id) {

    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );

  }
  // Decrease Quantity
  function decreaseQuantity(id) {

    setCart(
      cart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );

  }
  // Remove Product
  function removeItem(id) {

    setCart(
      cart.filter((item) => item.id !== id)
    );

  }
  return (
    <div className="container">

      <h1>Mini Product Catalog</h1>

      <h2>Our Products</h2>

      <div className="products">

        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>

      <Cart
        cart={cart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        removeItem={removeItem}
      />
    </div>
  );
}
export default App;
