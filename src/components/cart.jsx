import { useEffect, useState } from "react";
import { useCart } from "../useContext/cartContext";

export const Cart = () => {
  const { cartItems, removeFromCart } = useCart();
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(0);
  useEffect(() => {
    // Calculate the price whenever the count changes
    if (cartItems.length > 0) {
      const totalPrice = cartItems.reduce(
        (acc, item) => acc + item.price * count,
        0
      );
      setPrice(totalPrice);
    } else {
      setCount(0);
      setPrice(0);
    }
  }, [count, cartItems]);

  // useEffect(() => {
  //   // Calculate the price whenever the count changes
  //   if (cartItems.length > 0) {
  //     setCount(0);
  //     setPrice(0);
  //   }
  // }, [count, cartItems]);

  return (
    <div className="cartContainer container-fluid bg-light mx-auto">
      <div className="cartParent1 row d-flex justify-content-center py-4">
        <div className="cartChild1 col-sm-8 bg-white me-sm-3 mx-auto py-3">
          {cartItems.length === 0 ? (
            <h1>Your cart is empty</h1>
          ) : (
            <>
              {cartItems?.map((item) => {
                return (
                  <div className="cartChild1 row bg-white py-3">
                    <div className="col-md-3 col-4 my-auto">
                      <img
                        className="cartImg1 img-fluid"
                        src={item.thumbnail}
                        alt=""
                      />
                    </div>
                    <div className="col">
                      <h2 className="cartH1">{item.title}</h2>
                      <p className="cartP1">
                        <span className="cartSpan1">
                          {item.discountPercentage}% Off
                        </span>{" "}
                        <b />${item.price}
                      </p>
                      <p className="bg-light cartP2">
                        <button
                          className="cartBtn1 me-2"
                          onClick={() => {
                            setCount(count === 1 ? count + 0 : count - 1);
                          }}
                        >
                          -
                        </button>
                        {count}
                        <button
                          className="cartBtn2 ms-2"
                          onClick={() => {
                            setCount(count + 1);
                          }}
                        >
                          +
                        </button>
                      </p>
                      <button
                        className="cartBtn3"
                        onClick={() => {
                          removeFromCart(item.id);
                        }}
                      >
                        Remove Item
                      </button>
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </div>

        <div className="gridChild2 col-sm-3 mt-sm-auto mt-3 bg-white py-3">
          <h2 className="cartH4">
            Subtotal ({count} Items) : ${Math.floor(price)}
          </h2>
          <button className="cartBtn4">Proceed to buy</button>
          <p className="cartP3">
            The price and availability of items at ECom.in are subject to
            change. The shopping cart is a temporary place to store a list of
            your items and reflects each item's most recent price.
          </p>
        </div>
      </div>
    </div>
    // <div className="container">
    //   <h2>Your Cart</h2>
    //   {cartItems.length === 0 ? (
    //     <p>Your cart is empty</p>
    //   ) : (
    //     <ul className="list-group ">
    //       {cartItems.map((item) => (
    //         <li
    //           key={item.id}
    //           className="list-group-item d-flex justify-content-between align-items-center"
    //         >
    //           <div>
    //             <img src={item.thumbnail} className="w-50" />
    //             <h5>{item.title}</h5>
    //             <p>
    //               ${item.price} x {item.quantity || 1}
    //             </p>
    //           </div>
    //           <button
    //             className="btn btn-danger"
    //             onClick={() => removeFromCart(item.id)}
    //           >
    //             Remove
    //           </button>
    //         </li>
    //       ))}
    //     </ul>
    //   )}
    // </div>
  );
};
