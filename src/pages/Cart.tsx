import { useState, useEffect } from "react";
import { VscError } from "react-icons/vsc";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";
const cartItems = [
  {
    ProductId: "sadasdasdAS",
    photo:
      "https://pimcdn.sharafdg.com/cdn-cgi/image/width=600,height=700,fit=pad/images/MACBOOKAIRM12020_space_grey_1?1719922330?g=0",
    name: "Mackbook",
    price: 50000,
    quantity: 10,
    stock: 100,
  },
];
const subtotal = 4000;
const tax = Math.round(subtotal * 0.18);
const shippingCharge = 200;
const total = subtotal + tax + shippingCharge;
const discount = 400;

const Cart = () => {
  const [couponcode, setCouponcode] = useState<string>("");
  const [isvalidcouponcode, setisvalidCouponcode] = useState<boolean>(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (Math.random() > 0.5) setisvalidCouponcode(true);
      else setisvalidCouponcode(false);
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
      setisvalidCouponcode(false);
    };
  }, [couponcode]);

  return (
    <div className="cart">
      <main>
        {cartItems.length >0 ? (
          cartItems.map((i, idx) => <CartItem key={idx} cartItem={i} />)
        ) : (
          <h1>No Items Added</h1>
        )}
      </main>
      <aside>
        <p>Subtotal:₹{subtotal}</p>
        <p>ShippingCharge:₹{shippingCharge}</p>
        <p>Tax:₹{tax}</p>
        <p>
          Discount:
          <em className="red"> - ₹{discount} </em>
        </p>
        <p>
          <b>Total:₹{total}</b>
        </p>
        <input
          type="text"
          value={couponcode}
          placeholder="Coupncode"
          onChange={(e) => setCouponcode(e.target.value)}
        />
        {couponcode &&
          (isvalidcouponcode ? (
            <span className="green">
              ₹{discount} off using the <code>{couponcode}</code>
            </span>
          ) : (
            <span className="red">
              Invalid Coupon <VscError />
            </span>
          ))}
        {cartItems.length >0 && <Link to="/shipping">Checkout</Link>}
      </aside>
    </div>
  );
};

export default Cart;
