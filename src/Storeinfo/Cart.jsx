import React from "react";
import { Link } from "react-router-dom";

function Cart({ cartItems, item, removeFromCart }) {
  const calculateTotalPrice1 = (item) => {
    return item.price * item.quantity;
  };

  const overallTotalPrice = cartItems.reduce((total, item) => {
    return total + calculateTotalPrice1(item);
  }, 0);

  const handleRemoveFromCart = (itemId) => {};

  return (
    <div>
      <h2 style={{ fontFamily: "sans-serif" }}>Cart items</h2>
      <ul>
        {cartItems && cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <span style={{ fontFamily: "sans-serif" }} key={index}>
              <p>
                {item.name} - Price: {item.price} - Quantity: {item.quantity} -
                Price: {calculateTotalPrice1(item)}
                <button
                  className="remove"
                  onClick={() => handleRemoveFromCart(item.id)}>
                  x
                </button>
              </p>
            </span>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </ul>

      {cartItems.length > 0 && (
        <p
          style={{
            fontFamily: "sans-serif",
            marginLeft: 0,
            fontWeight: 600,
            fontSize: 25,
            position: "absolute",
            top: 400,
          }}>
          Overall Total Price: {overallTotalPrice}
        </p>
      )}

      {cartItems.length > 0 && (
        <Link
          to={{
            pathname: "/checkout",
            state: {
              cartItems,
              totalItems: cartItems.length,
              overallTotalPrice,
            },
          }}>
          <button
            className="proceed"
            style={{
              position: "absolute",
              width: 350,
              top: 450,
              cursor: "pointer",
            }}>
            Proceed to checkout
          </button>
        </Link>
      )}
    </div>
  );
}

export default Cart;
