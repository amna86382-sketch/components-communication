
function Cart({ cart, increaseQuantity, decreaseQuantity, removeItem }) {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total = total + cart[i].price * cart[i].quantity;
  }
  return (
    <div className="cart">

      <h2>Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        cart.map((item) => (
          <div className="cart-item" key={item.id}>

            <h3>{item.name}</h3>

            <p>Price: Rs. {item.price}</p>

            <div className="quantity">

              <button onClick={() => decreaseQuantity(item.id)}>
                -
              </button>

              <span>{item.quantity}</span>

              <button onClick={() => increaseQuantity(item.id)}>
                +
              </button>

            </div>

            <button
              className="remove-btn"
              onClick={() => removeItem(item.id)}
            >
              Remove
            </button>

          </div>
        ))
      )}
      <h3>Total: Rs. {total}</h3>

    </div>
  );
}
export default Cart;
